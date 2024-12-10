
let areasData = []; // Variável global para armazenar os dados das áreas
let areas = []; // Variável que será populada com os dados após o carregamento

async function fetchProcessoData() {
  const endpoint = `https://firestore.googleapis.com/v1/projects/teste-ad0e8/databases/(default)/documents/processos/sorteio`;

  // Exibir o carregamento
  const errorMessage = document.getElementById('errorMessage');
  if (errorMessage) {
    errorMessage.textContent = 'Carregando...';
  }

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    const data = await response.json();

    // Verificação de depuração: Ver o que realmente está vindo do Firestore
    console.log('Dados recebidos do Firestore:', data);

    if (
      data &&
      data.fields &&
      data.fields.areas &&
      Array.isArray(data.fields.areas.arrayValue.values)
    ) {
      areasData = data.fields.areas.arrayValue.values.map((item) => {
        // Verificar se o campo pontosSorteados existe
        const pontosSorteados =
          item.mapValue.fields.pontosSorteados?.arrayValue?.values;

        // Se pontosSorteados for undefined, inicializar como array vazio
        const pontosSorteadosArray = pontosSorteados || [];

        return {
          faculdade: item.mapValue.fields.faculdade?.stringValue || '', // Garantir que o valor esteja presente
          area: item.mapValue.fields.area?.stringValue || '', // Garantir que o valor esteja presente
          pontosSorteados: pontosSorteadosArray, // Garantir que seja um array vazio se não houver
          pontos:
            item.mapValue.fields.pontos?.arrayValue?.values?.map(
              (ponto) => ponto.stringValue
            ) || [], // Garantir que pontos seja um array vazio se não houver
        };
      });

      // Agora que areasData foi carregado, atribuiremos a areas
      areas = areasData;

      // Exibir os dados na tabela
      displayAreas(areas);
    } else {
      throw new Error('Dados inválidos ou estrutura inesperada');
    }
  } catch (error) {
    if (errorMessage) {
      errorMessage.textContent = `Erro: ${error.message}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchProcessoData();
  areas.forEach(imprimirArea); // Now safely populate the areas
  console.log(areas.length);
  let areasContador = areas.length;
  let contadorElement = document.getElementById('contador');
  contadorElement.innerHTML = `Áreas: ${areasContador}</strong>`;
});

console.log(areas);

const resultadosSorteio = [];

// inicio SCROLL FUNCTION_________________

let currentIndex = 0; // Índice inicial, começando na primeira seção
let isNavigating = false; // Variável de controle para evitar múltiplas navegações enquanto a tecla está pressionada
let sorteioAtribuido = false; // Variável de controle para atribuição do índice com base no sorteio

document.addEventListener('keydown', function (event) {
  if (
    (event.key === 'ArrowRight' || event.key === 'ArrowLeft') &&
    !isNavigating
  ) {
    isNavigating = true; // Ativa a trava
    navegarEntreSecoes(event.key);
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    isNavigating = false; // Desativa a trava ao soltar a tecla
  }
});

function navegarEntreSecoes(keyPressed) {
  const secoes = document.querySelectorAll(
    'section.area, section.resultadoArea'
  );
  const areasContador = secoes.length;

  // Verificar se o sorteio foi realizado e atribuir o índice apenas uma vez
  if (sorteioRealizado && !sorteioAtribuido) {
    currentIndex = Math.floor(areasContador / 2); // Ajuste de currentIndex
    sorteioAtribuido = true; // Garante que a atribuição ocorra apenas uma vez
    console.log('Índice ajustado para metade após o sorteio:', currentIndex);
  }

  // Atualizar o índice com base na tecla pressionada, respeitando os limites
  if (keyPressed === 'ArrowRight') {
    if (currentIndex < areasContador - 1) {
      currentIndex++; // Incrementa somente se não estiver na última seção
      console.log('A seção atual é currentIndex:', currentIndex);
    }
  } else if (keyPressed === 'ArrowLeft') {
    if (currentIndex > 0) {
      currentIndex--; // Decrementa somente se não estiver na primeira seção
      console.log('A seção atual é currentIndex:', currentIndex);
    }
  }

  // Rolar para a seção correspondente ao índice atual
  const targetSection = secoes[currentIndex];
  console.log('Seção alvo:', targetSection);
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
// FIM SCROLL FUNCTION_________________

function imprimirArea(area) {
  const container = document.getElementById('areasContainer');

  // Criar elementos HTML

  const areaElement = document.createElement('section');
  areaElement.className = 'area';
  const areaIndex = container.children.length + 1; // Número sequencial para a classe e ID
  // A classe será um número (1, 2, 3, etc.)
  areaElement.id = `${areaIndex}`;
  areaElement.innerHTML = `<div><hr></hr>
    <p class="area-title"><strong style="font-size: 1.3em;">${area.area}</strong></p>
    <p class="area-title">${area.faculdade}</p>
    </div>`;

  const tabelaElement = document.createElement('table');
  tabelaElement.classList.add('table', 'table-striped', 'table-bordered'); // Adiciona as classes do Bootstrap

  const corpoElement = document.createElement('tbody');
  area.pontos.forEach((ponto, index) => {
    const pontoItem = document.createElement('tr');
    pontoItem.innerHTML = `<td>${ponto}</td>`;

    // Adiciona classe para linhas ímpares terem uma cor de fundo mais fraca
    if (index % 2 !== 0) {
      pontoItem.classList.add('table-row-light');
    }

    corpoElement.appendChild(pontoItem);
  });

  tabelaElement.appendChild(corpoElement);

  // Adicionar elementos à página
  areaElement.appendChild(tabelaElement);
  container.appendChild(areaElement);
}

let sorteioRealizado = false;
let print = false;

function loadingSorteio() {
  // Mostra a div de carregamento
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.sorteio').style.display = 'none'; // Esconde a div de sorteio

  // Define um timeout para esconder a div de carregamento e mostrar a div de sorteio depois de 3 segundos
  setTimeout(function () {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.sorteio').style.display = 'block';
    exibirAlerta('success', 'Sorteio Realizado!');
  }, 2000);
}

function realizarSorteio() {
  ocultarAlerta();
  if (sorteioRealizado) {
    const confirmacao = confirm('Deseja sortear novamente?');
    if (!confirmacao) {
      return; // Se o usuário clicar em "Cancelar", não faz nada
    }
  }

  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = ''; // Limpar resultados anteriores

  resultadosSorteio.length = 0; // Limpar array de resultados

  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.add('d-none'); // Adiciona a classe 'd-none' para ocultar a div

  const infoContainer = document.getElementById('infoContainer');

  if (!infoContainer) {
    console.error('Elemento infoContainer não encontrado.');
    return;
  }

  infoContainer.innerHTML = ''; // Limpar o conteúdo anterior
  infoContainer.style.display = 'none'; // Define o estilo 'display' como 'block'

  areas.forEach((area) => {
    const pontosProvaDidatica = sortearPonto(area.pontos, area);

    // alimentar array areas
    area.pontosSorteados = [
      ...area.pontosSorteados,
      `Prova Didática - ${pontosProvaDidatica}`,
    ];

    const resultado = {
      area: area.area,
      faculdade: area.faculdade,
      pontoProvaDidatica: pontosProvaDidatica,
    };

    resultadosSorteio.push(resultado);

    const resultadoElement = document.createElement('section');
    resultadoElement.className = 'resultadoArea';
    const resultadoIndex = sorteioContainer.children.length + 1;
    resultadoElement.id = `${resultadoIndex}`;

    resultadoElement.innerHTML = `<div>
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
       <br>
       
      <p class="area-title"><strong>Prova Didática:</strong></p>
      <p class="area-title"><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
      <br>

     </div>
    `;

    // Append the resultadoElement to the DOM or wherever you want to display it
    document.body.appendChild(resultadoElement);

    sorteioContainer.appendChild(resultadoElement);
  });

  const dataAtual = new Date();

  // Formata a data e a hora (você pode ajustar o formato conforme necessário)
  const formatoDataHora = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  const dataHoraFormatada = dataAtual.toLocaleDateString(
    'pt-BR',
    formatoDataHora
  );
  infoContainer.innerHTML += `<div class="alert alert-info" role="alert">
     <p class="area-title">${dataHoraFormatada}</p>
  </div><br>`;

  console.log('Sorteio Realizado');
  console.log(resultadosSorteio);
  sorteioRealizado = true;
  print = false;

  exibirAlerta('success', 'Sorteio Realizado!');
  document.getElementById('resultadoDiv').style.display = 'block';
  loadingSorteio();
  showButtons();
}

function sortearPonto(pontos, area) {
  const infoContainer = document.getElementById('infoContainer');

  // Shuffle the points array
  const pontosOrd = pontos;
  const pontosEmbaralhados = shuffleArray(pontos);

  // Adicionar texto apenas se ainda não foi adicionado
  if (!print) {
    infoContainer.innerHTML += '<br><hr>';
    infoContainer.innerHTML +=
      '<div class="alert alert-success" role="alert"><p class="area-title"><strong>Arquivo de Logs</strong></p></div>';
    infoContainer.innerHTML += '<br>';
    print = true;
  }

  // logs de identificação
  console.log(
    `Sorteio para a área: ${area.area} (Faculdade: ${area.faculdade})`
  );
  console.log(
    'Os pontos disponíveis para sorteio da Prova Didática:',
    pontosOrd
  );
  console.log('Os pontos embaralhados:', pontosEmbaralhados);
  infoContainer.innerHTML += `
      <div class="alert alert-dark" role="alert" style="text-align: center;">
      <br>
        <p class="area-title">
        <strong>${area.area}</strong> (Faculdade: ${area.faculdade})</p>
        <br>
      </div>`;
  infoContainer.innerHTML += `<p><strong>Os pontos disponíveis para sorteio da Prova Didática:</strong> <br>${pontosOrd.join('<br> ')}</p>`;

  const randomBytes = new Uint8Array(1);
  crypto.getRandomValues(randomBytes);
  const indiceAleatorio = randomBytes[0] % pontosEmbaralhados.length;
  const pontoSorteado = pontosEmbaralhados[indiceAleatorio];

  // logs de identificação
  console.log('Ponto sorteado Prova Didática:', pontoSorteado);
  console.log('Finalizado');

  infoContainer.innerHTML += `
      <div class="alert alert-success" role="alert" style="text-align: center;">
      <p class="area-title">Ponto sorteado para <strong>Prova Didática:</strong><br>
      <strong>${pontoSorteado}</strong>
      </div>`;

  infoContainer.innerHTML += `
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"><strong>Resultado Sorteio - ${area.area}</strong> (Faculdade: ${area.faculdade})</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Prova Didática:</strong> ${pontoSorteado}</td>
            </tr>
          </tbody>
        </table>
      `;

  infoContainer.innerHTML += `<div class="alert alert-info" role="alert">
     <p class="area-title">Finalizado!</p></div><br><hr></hr>`;

  return pontoSorteado;
}

// Function to shuffle array
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Chamar a função para imprimir as áreas
areas.forEach(imprimirArea);

//botoes

function showButtons() {
  const buttonsContainer = document.getElementById('buttonsContainer');
  const buttonsContainer2 = document.getElementById('buttonsContainer2');
  buttonsContainer.style.display = 'block';
  buttonsContainer2.style.display = 'block';
}

function goHome() {
  document.getElementById('resultadoDiv').style.display = 'none';
  // Clear the results container
  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = '';
  infoContainer.style.display = 'none';

  // Show the areas container
  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.remove('d-none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function viewResults() {
  document.getElementById('resultadoDiv').style.display = 'block';

  if (infoContainer) {
    infoContainer.style.display = 'none';
  }

  // Check if the draw has been performed
  if (!sorteioRealizado) {
    alert(
      'O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro.'
    );
    return;
  }

  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = ''; // Clear previous results

  resultadosSorteio.forEach((resultado) => {
    const resultadoElement = document.createElement('section');
    resultadoElement.className = 'resultado-area';
    const resultadoIndex = sorteioContainer.children.length + 1; // Usando sorteioContainer
    resultadoElement.id = `${resultadoIndex}`;

    resultadoElement.innerHTML = `
    <div>
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
       <br>

      <p class="area-title"><strong>Prova Didática:</strong></p>
      <p class="area-title"><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
      <br>

    </div>
    `;
    sorteioContainer.appendChild(resultadoElement);
  });

  // Optionally, you can scroll to the results section for better visibility
  sorteioContainer.scrollIntoView({ behavior: 'smooth' });

  // Hide the areas container
  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.add('d-none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveResults() {
  // Check if the draw has been performed
  if (!sorteioRealizado) {
    alert(
      'O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro.'
    );
    return;
  }

  // Prepare CSV content
  let csvContent = 'Área;Faculdade;Prova Didática\n';

  resultadosSorteio.forEach((resultado) => {
    const csvRow = `${resultado.area};${resultado.faculdade};"${resultado.pontoProvaDidatica}"\n`;
    csvContent += csvRow;
  });

  // Prepare text file content for results
  let textContentResults = 'Resultados do Sorteio\n\n';
  resultadosSorteio.forEach((resultado) => {
    textContentResults += `Área: ${resultado.area} - ${resultado.faculdade}\n`;
    textContentResults += `Prova Didática:  ${resultado.pontoProvaDidatica}\n\n`; // Adjust spacing
  });

  // Manually add newline characters for better compatibility
  textContentResults = textContentResults.replace(/\n/g, '\r\n');

  // Prepare text file content for infoContainer
  const infoContainerContent =
    document.getElementById('infoContainer').innerText;
  let textContentInfoContainer = 'Conteúdo do infoContainer\n\n';
  textContentInfoContainer += infoContainerContent;
  // Manually add newline characters for better compatibility
  textContentInfoContainer = textContentInfoContainer.replace(/\n/g, '\r\n');

  // Create Blobs with the CSV and text content
  const csvBlob = new Blob([csvContent], { type: 'text/csv' });
  const textBlobResults = new Blob([textContentResults], {
    type: 'text/plain',
  });
  const textBlobInfoContainer = new Blob([textContentInfoContainer], {
    type: 'text/plain',
  });

  // Download CSV file
  downloadFile(csvBlob, 'resultados_sorteio.csv');

  // Download text file for results
  downloadFile(textBlobResults, 'resultados_sorteio.txt');

  // Download text file for infoContainer
  downloadFile(textBlobInfoContainer, 'logs.txt');
}

function downloadFile(blob, fileName) {
  // Create a download link for the file
  const fileLink = document.createElement('a');
  fileLink.href = URL.createObjectURL(blob);
  fileLink.download = fileName;

  // Append the link to the body and trigger a click
  document.body.appendChild(fileLink);
  fileLink.click();

  // Remove the link from the body
  document.body.removeChild(fileLink);
}

function mostrarLog() {
  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = '';
  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.add('d-none');

  infoContainer.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.print();
}

// ALERTAS

function exibirAlerta(tipo, mensagem) {
  ocultarAlerta();
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');

  // Defina a classe e a mensagem do alerta
  customAlert.className = `alert alert-${tipo} alert-dismissible fade show`;

  // Centralize o texto usando a propriedade de texto alinhado
  customAlert.style.textAlign = 'center';
  customAlertMessage.innerText = mensagem;

  // Exiba o alerta
  customAlert.style.display = 'block';

  setTimeout(() => {
    customAlert.style.display = 'none';
  }, 4000);
}

function ocultarAlerta() {
  const customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'none';
}
