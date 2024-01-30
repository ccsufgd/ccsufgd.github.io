
const areas = areasData;

console.log(areas);

const resultadosSorteio = [];

console.log(areas.length);
const areasContainer = document.getElementById('areasContainer');
const areasCountElement = document.createElement('p');
areasCountElement.style.textAlign = 'center';
areasCountElement.textContent = `Áreas: ${areas.length}`;
areasContainer.appendChild(areasCountElement);

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



function realizarSorteio() {
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
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
      <p><strong>Prova Escrita:</strong></p>
      
      <p><mark>${resultado.pontoProvaEscrita}</mark></p>
      <p><strong>Prova Didática:</strong></p>
 
      <p><mark>${resultado.pontoProvaDidatica}</mark></p>
     
    `;

    // Append the resultadoElement to the DOM or wherever you want to display it
    document.body.appendChild(resultadoElement);


      
      
      
      
      ;

    sorteioContainer.appendChild(resultadoElement);
  });
  console.log('Sorteio Realizado');
  console.log(resultadosSorteio);
  sorteioRealizado = true;
  showButtons();
}


function sortearPonto(pontos, pontoExcluido, area) {
  
  console.log(`Sorteio para a área: ${area.area} (Faculdade: ${area.faculdade})`);
  console.log('Os pontos disponíveis são:', pontos);

  const pontosDisponiveis = pontoExcluido ? pontos.filter(ponto => ponto !== pontoExcluido) : pontos;
  console.log('Os pontos disponíveis após exclusão são:', pontosDisponiveis);
  console.log('Ponto excluído é:', pontoExcluido);

  // Criar um array de bytes para armazenar os valores gerados de forma mais segura
  const randomBytes = new Uint8Array(1);

  // Preencher o array com valores aleatórios usando a API crypto
  crypto.getRandomValues(randomBytes);

  // Calcular o índice baseado nos bytes gerados aleatoriamente
  const indiceAleatorio = randomBytes[0] % pontosDisponiveis.length;

  const pontoSorteado = pontosDisponiveis[indiceAleatorio];
  console.log('Ponto sorteado é:', pontoSorteado);

  return pontoSorteado;
}
// Chamar a função para imprimir as áreas
areas.forEach(imprimirArea);



//botoes

function showButtons() {
  const buttonsContainer = document.getElementById('buttonsContainer');
  buttonsContainer.style.display = 'block';
}


function goHome() {
  // Clear the results container
  const sorteioContainer = document.getElementById('sorteioContainer');
  sorteioContainer.innerHTML = '';

  // Show the areas container
  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.remove('d-none');

}

function viewResults() {
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
    resultadoElement.innerHTML = `<hr></hr><p class="area-title"><strong>${resultado.area} - ${resultado.faculdade}</strong></p>
    <p><strong>Prova Escrita:</strong></p>
    <p>${resultado.pontoProvaEscrita}</p>
    <p><strong>Prova Didática:</strong></p>
    <p>${resultado.pontoProvaDidatica}</p>`;
    sorteioContainer.appendChild(resultadoElement);
  });

  // Optionally, you can scroll to the results section for better visibility
  sorteioContainer.scrollIntoView({ behavior: 'smooth' });

  // Hide the areas container
  const areasContainer = document.getElementById('areasContainer');
  areasContainer.classList.add('d-none');
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

  // Prepare text file content
  let textContent = "Resultados do Sorteio\n\n";
  resultadosSorteio.forEach(resultado => {
    textContent += `Área: ${resultado.area} - ${resultado.faculdade}\n`;
    textContent += `Prova Escrita:   ${resultado.pontoProvaEscrita}\n`; // Adjust spacing
    textContent += `Prova Didática:  ${resultado.pontoProvaDidatica}\n\n`; // Adjust spacing
  });

  // Manually add newline characters for better compatibility
  textContent = textContent.replace(/\n/g, '\r\n');

  // Create a Blob with the CSV content
  const csvBlob = new Blob([csvContent], { type: 'text/csv' });

  // Create a Blob with the text content
  const textBlob = new Blob([textContent], { type: 'text/plain' });

  // Create a download link for the CSV file
  const csvLink = document.createElement('a');
  csvLink.href = URL.createObjectURL(csvBlob);
  csvLink.download = 'resultados_sorteio.csv';

  // Append the link to the body and trigger a click
  document.body.appendChild(csvLink);
  csvLink.click();

  // Remove the link from the body
  document.body.removeChild(csvLink);

  // Create a download link for the text file
  const textLink = document.createElement('a');
  textLink.href = URL.createObjectURL(textBlob);
  textLink.download = 'resultados_sorteio.txt';

  // Append the link to the body and trigger a click
  document.body.appendChild(textLink);
  textLink.click();

  // Remove the link from the body
  document.body.removeChild(textLink);
}




