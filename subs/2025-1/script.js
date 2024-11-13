const areas = areasData;

console.log(areas);

const resultadosSorteio = [];

//---- inicio section scroll
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        scrollToSection(event.key);
    }
});

function scrollToSection(keyPressed) {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página
    let currentSectionIndex = -1;

    // Encontra o índice da seção atualmente visível
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Verifica se a seção está visível (parcialmente ou completamente na tela)
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSectionIndex = index;
        }
    });

    if (currentSectionIndex === -1) {
        // Se nenhuma seção estiver visível, não faz nada
        return;
    }

    let targetIndex;

    // Determina o índice da seção de destino com base na tecla pressionada
    if (keyPressed === 'ArrowRight') {
        targetIndex = currentSectionIndex + 1;
    } else if (keyPressed === 'ArrowLeft') {
        targetIndex = currentSectionIndex - 1;
    }

    // Verifica se o índice da seção de destino é válido
    if (targetIndex >= 0 && targetIndex < sections.length) {
        const targetSection = sections[targetIndex];
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Rola para a seção de destino e centraliza verticalmente
    }
}



//---- fim section scroll----
console.log(areas.length);
let areasContador = areas.length;
let contadorElement = document.getElementById('contador');
contadorElement.innerHTML = `Áreas: ${areasContador}</strong>`;




function imprimirArea(area) {
  const container = document.getElementById('areasContainer');

  // Criar elementos HTML
  const areaElement = document.createElement('section');
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
    setTimeout(function() {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.sorteio').style.display = 'block';
        exibirAlerta('success', 'Sorteio Realizado!');
    }, 2000); 
  }


function realizarSorteio() {
  ocultarAlerta();
  if (sorteioRealizado) {
    const confirmacao = confirm("Deseja sortear novamente?");
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

  areas.forEach(area => {
    const pontosProvaDidatica = sortearPonto(area.pontos, area);

    // alimentar array areas
    area.pontosSorteados = [...area.pontosSorteados, `Prova Didática - ${pontosProvaDidatica}`];

    const resultado = {
      area: area.area,
      faculdade: area.faculdade,
      pontoProvaDidatica: pontosProvaDidatica
    };

    resultadosSorteio.push(resultado);

    const resultadoElement = document.createElement('section');
    resultadoElement.className = 'resultado-area';

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
  const formatoDataHora = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const dataHoraFormatada = dataAtual.toLocaleDateString('pt-BR', formatoDataHora);
  infoContainer.innerHTML += `<div class="alert alert-info" role="alert">
     <p class="area-title">${dataHoraFormatada}</p>
  </div><br>`;

  console.log('Sorteio Realizado');
  console.log(resultadosSorteio);
  sorteioRealizado = true;
  print = false;

  exibirAlerta('success', 'Sorteio Realizado!');
document.getElementById("resultadoDiv").style.display = "block";
  loadingSorteio(); 
  showButtons();
}

function sortearPonto(pontos, area) {
    const infoContainer = document.getElementById('infoContainer');
  
    // Shuffle the points array
    const pontosOrd = pontos
    const pontosEmbaralhados = shuffleArray(pontos);

    // Adicionar texto apenas se ainda não foi adicionado
    if (!print) {
      infoContainer.innerHTML += '<br><hr>';
      infoContainer.innerHTML += '<div class="alert alert-success" role="alert"><p class="area-title"><strong>Arquivo de Logs</strong></p></div>';
      infoContainer.innerHTML += '<br>';
      print = true;
    }
  
    // logs de identificação
    console.log(`Sorteio para a área: ${area.area} (Faculdade: ${area.faculdade})`);
    console.log('Os pontos disponíveis para sorteio da Prova Didática:', pontosOrd);
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
document.getElementById("resultadoDiv").style.display = "none";
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
  document.getElementById("resultadoDiv").style.display = "block";

  if (infoContainer) {
    infoContainer.style.display = 'none';
  }

  // Check if the draw has been performed
  if (!sorteioRealizado) {
    alert("O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro.");
    return;
  }

  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = ''; // Clear previous results

  resultadosSorteio.forEach(resultado => {
    const resultadoElement = document.createElement('section');
    resultadoElement.className = 'resultado-area';
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
    alert("O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro.");
    return;
  }

  // Prepare CSV content
  let csvContent = "Área;Faculdade;Prova Didática\n";

  resultadosSorteio.forEach(resultado => {
    const csvRow = `${resultado.area};${resultado.faculdade};"${resultado.pontoProvaDidatica}"\n`;
    csvContent += csvRow;
  });

  // Prepare text file content for results
  let textContentResults = "Resultados do Sorteio\n\n";
  resultadosSorteio.forEach(resultado => {
    textContentResults += `Área: ${resultado.area} - ${resultado.faculdade}\n`;
    textContentResults += `Prova Didática:  ${resultado.pontoProvaDidatica}\n\n`; // Adjust spacing
  });

  // Manually add newline characters for better compatibility
  textContentResults = textContentResults.replace(/\n/g, '\r\n');

  // Prepare text file content for infoContainer
  const infoContainerContent = document.getElementById('infoContainer').innerText;
  let textContentInfoContainer = "Conteúdo do infoContainer\n\n";
  textContentInfoContainer += infoContainerContent;
  // Manually add newline characters for better compatibility
  textContentInfoContainer = textContentInfoContainer.replace(/\n/g, '\r\n');

  // Create Blobs with the CSV and text content
  const csvBlob = new Blob([csvContent], { type: 'text/csv' });
  const textBlobResults = new Blob([textContentResults], { type: 'text/plain' });
  const textBlobInfoContainer = new Blob([textContentInfoContainer], { type: 'text/plain' });

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
  window.print()
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

