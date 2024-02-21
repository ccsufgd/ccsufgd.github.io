
const areas = areasData;

console.log(areas);

const resultadosSorteio = [];



console.log(areas.length);
let areasContador = areas.length;
let contadorElement = document.getElementById('contador');
contadorElement.innerHTML = `Áreas: ${areasContador}</strong>`;



function imprimirArea(area) {
  const container = document.getElementById('areasContainer');

  // Criar elementos HTML
  const areaElement = document.createElement('div');
  areaElement.innerHTML = `<hr></hr>
    <p class="area-title"><strong style="font-size: 1.3em;">${area.area}</strong></p>
    <p class="area-title">${area.faculdade}</p>`;

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
    const pontosProvaEscrita = sortearPonto(area.pontos, null, area);
    const pontosProvaDidatica = sortearPonto(area.pontos, pontosProvaEscrita, area);

    // alimentar array areas
    area.pontosSorteados = [...area.pontosSorteados, `Prova Escrita - ${pontosProvaEscrita}`, `Prova Didática - ${pontosProvaDidatica}`];

    const resultado = {
      area: area.area,
      faculdade: area.faculdade,
      pontoProvaEscrita: pontosProvaEscrita,
      pontoProvaDidatica: pontosProvaDidatica
    };

    resultadosSorteio.push(resultado);

    const resultadoElement = document.createElement('div');
    resultadoElement.className = 'resultado-area';

    resultadoElement.innerHTML = `
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
      <p><strong>Prova Escrita:</strong></p>

      <p><mark>${resultado.pontoProvaEscrita}</mark></p>
      <p><strong>Prova Didática:</strong></p>

      <p><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
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
  showButtons();
}



function sortearPonto(pontos, pontoExcluido, area) {
  
  const infoContainer = document.getElementById('infoContainer');

  // Adicionar texto apenas se ainda não foi adicionado
  if (!print) {
    infoContainer.innerHTML += '<br><hr>';
    infoContainer.innerHTML += '<div class="alert alert-success" role="alert"><p class="area-title"><strong>Arquivo de Logs</strong></p></div>';
    infoContainer.innerHTML += '<br>';
    print = true;
  }
 

  // logs de identificação
  if (!pontoExcluido) {
    console.log(`Sorteio para a área: ${area.area} (Faculdade: ${area.faculdade})`);
    console.log('Os pontos disponíveis para sorteio da Prova Escrita', pontos);
    infoContainer.innerHTML += `
    <div class="alert alert-dark" role="alert" style="text-align: center;">
    <br>
      <p class="area-title">
      <strong>${area.area}</strong> (Faculdade: ${area.faculdade})</p>
      <br>
    </div>`;
    infoContainer.innerHTML += `<p><strong>Os pontos disponíveis para sorteio da Prova Escrita:</strong> <br>${pontos.join('<br> ')}</p>`;
    
  }

  const pontosDisponiveis = pontoExcluido ? pontos.filter(ponto => ponto !== pontoExcluido) : pontos;

  // logs de identificação
  if (pontoExcluido) {
    console.log('Ponto sorteado Prova Escrita:', pontoExcluido);
    console.log('Ponto excluído para sorteio da Prova Didática::', pontoExcluido);
    console.log('Os pontos disponíveis após exclusão são:', pontosDisponiveis);

    infoContainer.innerHTML += ``;
    infoContainer.innerHTML += `
    <div class="alert alert-success" role="alert" style="text-align: center;">
    <p class="area-title">Ponto sorteado <strong>Prova Escrita:</strong><br>
    <strong>${pontoExcluido}</strong>
    </div>`;
    infoContainer.innerHTML += `
    <div class="alert alert-danger" role="alert" style="text-align: center;">
    <p class="area-title">Ponto excluído para sorteio da <strong>Prova Didática:</strong><br>
    <strong><s>${pontoExcluido}</s></strong>
    </div>`;
    infoContainer.innerHTML += `<p><strong>Os pontos disponíveis para sorteio da Prova Didática:</strong><br>${pontosDisponiveis.join('<br> ')}</p>`;
  }

  const randomBytes = new Uint8Array(1);
  crypto.getRandomValues(randomBytes);
  const indiceAleatorio = randomBytes[0] % pontosDisponiveis.length;
  const pontoSorteado = pontosDisponiveis[indiceAleatorio];

  // logs de identificação
  if (pontoExcluido) {
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
            <td><strong>Prova Escrita</strong>: ${pontoExcluido}</td>
          </tr>
          <tr>
            <td><strong>Prova Didática:</strong> ${pontoSorteado}</td>
          </tr>
        </tbody>
      </table>
    `;


    infoContainer.innerHTML += `<div class="alert alert-info" role="alert">
   <p class="area-title">Finalizado!</p></div><br><hr></hr>
`;


  }

  return pontoSorteado;
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
    const resultadoElement = document.createElement('div');
    resultadoElement.className = 'resultado-area';
    resultadoElement.innerHTML = `
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
      <p><strong>Prova Escrita:</strong></p>

      <p><mark>${resultado.pontoProvaEscrita}</mark></p>
      <p><strong>Prova Didática:</strong></p>

      <p><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
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
  let csvContent = "Área;Faculdade;Prova Escrita;Prova Didática\n";

  resultadosSorteio.forEach(resultado => {
    const csvRow = `${resultado.area};${resultado.faculdade};"${resultado.pontoProvaEscrita}";"${resultado.pontoProvaDidatica}"\n`;
    csvContent += csvRow;
  });

  // Prepare text file content for results
  let textContentResults = "Resultados do Sorteio\n\n";
  resultadosSorteio.forEach(resultado => {
    textContentResults += `Área: ${resultado.area} - ${resultado.faculdade}\n`;
    textContentResults += `Prova Escrita:   ${resultado.pontoProvaEscrita}\n`; // Adjust spacing
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
  }, 2500);
}


function ocultarAlerta() {
  const customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'none';
}

