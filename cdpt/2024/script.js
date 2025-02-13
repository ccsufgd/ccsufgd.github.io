const areas = areasData;

console.log(areas);

const resultadosSorteio = [];

// inicio SCROLL FUNCTION_________________

let currentIndex = 0; // Índice inicial, começando na primeira seção
let isNavigating = false; // Variável de controle para evitar múltiplas navegações enquanto a tecla está pressionada
let sorteioAtribuido = false; // Variável de controle para atribuição do índice com base no sorteio

document.addEventListener("keydown", function (event) {
  if (
    (event.key === "ArrowRight" || event.key === "ArrowLeft") &&
    !isNavigating
  ) {
    isNavigating = true; // Ativa a trava
    navegarEntreSecoes(event.key);
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    isNavigating = false; // Desativa a trava ao soltar a tecla
  }
});

function navegarEntreSecoes(keyPressed) {
  const secoes = document.querySelectorAll(
    "section.area, section.resultadoArea"
  );
  const areasContador = secoes.length;

  // Verificar se o sorteio foi realizado e atribuir o índice apenas uma vez
  if (sorteioRealizado && !sorteioAtribuido) {
    currentIndex = Math.floor(areasContador / 2); // Ajuste de currentIndex
    sorteioAtribuido = true; // Garante que a atribuição ocorra apenas uma vez
    console.log("Índice ajustado para metade após o sorteio:", currentIndex);
  }

  // Atualizar o índice com base na tecla pressionada, respeitando os limites
  if (keyPressed === "ArrowRight") {
    if (currentIndex < areasContador - 1) {
      currentIndex++; // Incrementa somente se não estiver na última seção
      console.log("A seção atual é currentIndex:", currentIndex);
    }
  } else if (keyPressed === "ArrowLeft") {
    if (currentIndex > 0) {
      currentIndex--; // Decrementa somente se não estiver na primeira seção
      console.log("A seção atual é currentIndex:", currentIndex);
    }
  }

  // Rolar para a seção correspondente ao índice atual
  const targetSection = secoes[currentIndex];
  console.log("Seção alvo:", targetSection);
  targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
}
// FIM SCROLL FUNCTION_________________

console.log(areas.length);
let areasContador = areas.length;
let contadorElement = document.getElementById("contador");
contadorElement.innerHTML = `Áreas: ${areasContador}</strong>`;

function imprimirArea(area) {
  const container = document.getElementById("areasContainer");

  // Criar elementos HTML

  const areaElement = document.createElement("section");
  areaElement.className = "area";
  const areaIndex = container.children.length + 1; // Número sequencial para a classe e ID
  // A classe será um número (1, 2, 3, etc.)
  areaElement.id = `${areaIndex}`;
  areaElement.innerHTML = `<div><hr></hr>
    <p class="area-title"><strong style="font-size: 1.3em;">${area.area}</strong></p>
    <p class="area-title">${area.faculdade}</p>
    </div>`;

  const tabelaElement = document.createElement("table");
  tabelaElement.classList.add("table", "table-striped", "table-bordered"); // Adiciona as classes do Bootstrap

  const corpoElement = document.createElement("tbody");
  area.pontos.forEach((ponto, index) => {
    const pontoItem = document.createElement("tr");
    pontoItem.innerHTML = `<td>${ponto}</td>`;

    // Adiciona classe para linhas ímpares terem uma cor de fundo mais fraca
    if (index % 2 !== 0) {
      pontoItem.classList.add("table-row-light");
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
  document.querySelector(".loading").style.display = "block";
  document.querySelector(".sorteio").style.display = "none"; // Esconde a div de sorteio

  // Define um timeout para esconder a div de carregamento e mostrar a div de sorteio depois de 3 segundos
  setTimeout(function () {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".sorteio").style.display = "block";
    exibirAlerta("success", "Sorteio Realizado!");
  }, 2000);
}

function shuffleArray(array) {
  const arr = array.slice(); // Criar uma cópia para evitar modificar o original
  const length = arr.length;
  const uintArray = new Uint32Array(length);

  crypto.getRandomValues(uintArray); // Gera números aleatórios seguros

  for (let i = length - 1; i > 0; i--) {
    const randomIndex = uintArray[i] % (i + 1); // Escolher um índice dentro do intervalo válido
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; // Troca os elementos
  }

  return arr;
}

function sortearProvaEscrita(pontos, area) {
  const infoContainer = document.getElementById("infoContainer");

  // Cria uma cópia ordenada para os logs
  const pontosOrdenados = [...pontos].sort((a, b) => {
    const numA = parseInt(a.split(" - ")[0]);
    const numB = parseInt(b.split(" - ")[0]);
    return numA - numB;
  });

  console.log(
    `Sorteio para a área: ${area.area} (Faculdade: ${area.faculdade})`
  );
  console.log(
    "Pontos disponíveis para Prova Escrita (ordenados):",
    pontosOrdenados
  );

  infoContainer.innerHTML += `
    <div class="alert alert-dark" role="alert" style="text-align: center;">
      <br>
      <p class="area-title">
        <strong>${area.area}</strong> (Faculdade: ${area.faculdade})
      </p>
      <br>
    </div>`;
  infoContainer.innerHTML += `<p><strong>Pontos disponíveis para Prova Escrita:</strong><br>${pontosOrdenados.join(
    "<br> "
  )}</p>`;

  // Embaralha os pontos para o sorteio
  const pontosEmbaralhados = shuffleArray(pontos);
  console.log(
    "Pontos disponíveis para Prova Escrita (embaralhados):",
    pontosEmbaralhados
  );

  // Sorteio usando crypto API a partir do array embaralhado
  const randomBytes = new Uint8Array(1);
  crypto.getRandomValues(randomBytes);
  const indiceAleatorio = randomBytes[0] % pontosEmbaralhados.length;
  return pontosEmbaralhados[indiceAleatorio];
}

function sortearProvaDidatica(pontos, pontoExcluido, area) {
  const infoContainer = document.getElementById("infoContainer");

  // Filtra os pontos disponíveis excluindo o ponto sorteado na escrita
  const pontosDisponiveis = pontos.filter((ponto) => ponto !== pontoExcluido);
  const pontosDisponiveisOrdenados = [...pontosDisponiveis].sort((a, b) => {
    const numA = parseInt(a.split(" - ")[0]);
    const numB = parseInt(b.split(" - ")[0]);
    return numA - numB;
  });
  console.log("Ponto sorteado Prova Escrita:", pontoExcluido);
  console.log(
    "Pontos disponíveis para Prova Didática (ordenados):",
    pontosDisponiveisOrdenados
  );

  infoContainer.innerHTML += `
    <div class="alert alert-success" role="alert" style="text-align: center;">
      <p class="area-title">Ponto sorteado <strong>Prova Escrita:</strong><br>
      <strong>${pontoExcluido}</strong></p>
    </div>`;
  infoContainer.innerHTML += `
    <div class="alert alert-danger" role="alert" style="text-align: center;">
      <p class="area-title">Ponto excluído para o sorteio da Prova Didática:<br>
      <strong><s>${pontoExcluido}</s></strong></p>
    </div>`;
  infoContainer.innerHTML += `<p><strong>Pontos disponíveis para Prova Didática:</strong><br>${pontosDisponiveisOrdenados.join(
    "<br> "
  )}</p>`;

  // Embaralha os pontos disponíveis para o sorteio
  const pontosDisponiveisEmbaralhados = shuffleArray(pontosDisponiveis);
  console.log(
    "Pontos disponíveis para Prova Didática (Embaralhados):",
    pontosDisponiveisEmbaralhados
  );

  // Sorteio usando crypto API a partir do array embaralhado
  const randomBytes = new Uint8Array(1);
  crypto.getRandomValues(randomBytes);
  const indiceAleatorio = randomBytes[0] % pontosDisponiveisEmbaralhados.length;
  const pontoSorteado = pontosDisponiveisEmbaralhados[indiceAleatorio];

  console.log("Ponto sorteado Prova Didática:", pontoSorteado);

  infoContainer.innerHTML += `
    <div class="alert alert-success" role="alert" style="text-align: center;">
      <p class="area-title">Ponto sorteado <strong>Prova Didática:</strong><br>
      <strong>${pontoSorteado}</strong></p>
    </div>`;

  console.log(
    "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  return pontoSorteado;
}

function realizarSorteio() {
  ocultarAlerta();
  if (sorteioRealizado) {
    const confirmacao = confirm("Deseja sortear novamente?");
    if (!confirmacao) {
      return;
    }
  }

  const sorteioContainer = document.getElementById("sorteioContainer");
  sorteioContainer.innerHTML = "";
  resultadosSorteio.length = 0;

  const areasContainer = document.getElementById("areasContainer");
  areasContainer.classList.add("d-none");

  areas.forEach((area) => {
    const pontosProvaEscrita = sortearProvaEscrita(area.pontos, area);
    const pontosProvaDidatica = sortearProvaDidatica(
      area.pontos,
      pontosProvaEscrita,
      area
    );

    const resultado = {
      area: area.area,
      faculdade: area.faculdade,
      pontoProvaEscrita: pontosProvaEscrita,
      pontoProvaDidatica: pontosProvaDidatica,
    };

    resultadosSorteio.push(resultado);

    const resultadoElement = document.createElement("section");
    resultadoElement.className = "resultadoArea";
    resultadoElement.innerHTML = `
     <div>
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
      <p><strong>Prova Escrita:</strong></p>

      <p><mark>${resultado.pontoProvaEscrita}</mark></p>
      <p><strong>Prova Didática:</strong></p>

      <p><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
      </div>`;

    sorteioContainer.appendChild(resultadoElement);
  });

  console.log("Sorteio Realizado", resultadosSorteio);
  sorteioRealizado = true;
  exibirAlerta("success", "Sorteio Realizado!");
  loadingSorteio();
  showButtons();
}

// Chamar a função para imprimir as áreas
areas.forEach(imprimirArea);

//botoes

function showButtons() {
  const buttonsContainer = document.getElementById("buttonsContainer");
  const buttonsContainer2 = document.getElementById("buttonsContainer2");
  buttonsContainer.style.display = "block";
  buttonsContainer2.style.display = "block";
}

function goHome() {
  document.getElementById("resultadoDiv").style.display = "none";
  // Clear the results container
  const sorteioContainer = document.getElementById("sorteioContainer");
  sorteioContainer.innerHTML = "";
  infoContainer.style.display = "none";

  // Show the areas container
  const areasContainer = document.getElementById("areasContainer");
  areasContainer.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function viewResults() {
  document.getElementById("resultadoDiv").style.display = "block";

  if (infoContainer) {
    infoContainer.style.display = "none";
  }
  // Check if the draw has been performed
  if (!sorteioRealizado) {
    alert(
      "O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro."
    );
    return;
  }

  const sorteioContainer = document.getElementById("sorteioContainer");
  sorteioContainer.innerHTML = ""; // Clear previous results

  resultadosSorteio.forEach((resultado) => {
    const resultadoElement = document.createElement("section");
    resultadoElement.className = "resultado-area";
    const resultadoIndex = sorteioContainer.children.length + 1; // Usando sorteioContainer
    resultadoElement.id = `${resultadoIndex}`;

    resultadoElement.innerHTML = `
     <div>
      <hr>
      <br>
      <p class="area-title"><strong style="font-size: 1.3em;">${resultado.area} - ${resultado.faculdade}</strong></p>
      <p><strong>Prova Escrita:</strong></p>

      <p><mark>${resultado.pontoProvaEscrita}</mark></p>
      <p><strong>Prova Didática:</strong></p>

      <p><mark>${resultado.pontoProvaDidatica}</mark></p>
      <br>
      </div>
    `;
    sorteioContainer.appendChild(resultadoElement);
  });

  // Optionally, you can scroll to the results section for better visibility
  sorteioContainer.scrollIntoView({ behavior: "smooth" });

  // Hide the areas container
  const areasContainer = document.getElementById("areasContainer");
  areasContainer.classList.add("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveResults() {
  // Check if the draw has been performed
  if (!sorteioRealizado) {
    alert(
      "O sorteio ainda não foi realizado. Por favor, realize o sorteio primeiro."
    );
    return;
  }

  // Prepare CSV content
  let csvContent = "Área;Faculdade;Prova Escrita;Prova Didática\n";

  resultadosSorteio.forEach((resultado) => {
    const csvRow = `${resultado.area};${resultado.faculdade};"${resultado.pontoProvaEscrita}";"${resultado.pontoProvaDidatica}"\n`;
    csvContent += csvRow;
  });

  // Prepare text file content for results
  let textContentResults = "Resultados do Sorteio\n\n";
  resultadosSorteio.forEach((resultado) => {
    textContentResults += `Área: ${resultado.area} - ${resultado.faculdade}\n`;
    textContentResults += `Prova Escrita:   ${resultado.pontoProvaEscrita}\n`; // Adjust spacing
    textContentResults += `Prova Didática:  ${resultado.pontoProvaDidatica}\n\n`; // Adjust spacing
  });

  // Manually add newline characters for better compatibility
  textContentResults = textContentResults.replace(/\n/g, "\r\n");

  // Prepare text file content for infoContainer
  const infoContainerContent =
    document.getElementById("infoContainer").innerText;
  let textContentInfoContainer = "Conteúdo do infoContainer\n\n";
  textContentInfoContainer += infoContainerContent;
  // Manually add newline characters for better compatibility
  textContentInfoContainer = textContentInfoContainer.replace(/\n/g, "\r\n");

  // Create Blobs with the CSV and text content
  const csvBlob = new Blob([csvContent], { type: "text/csv" });
  const textBlobResults = new Blob([textContentResults], {
    type: "text/plain",
  });
  const textBlobInfoContainer = new Blob([textContentInfoContainer], {
    type: "text/plain",
  });

  // Download CSV file
  downloadFile(csvBlob, "resultados_sorteio.csv");

  // Download text file for results
  downloadFile(textBlobResults, "resultados_sorteio.txt");

  // Download text file for infoContainer
  downloadFile(textBlobInfoContainer, "logs.txt");
}

function downloadFile(blob, fileName) {
  // Create a download link for the file
  const fileLink = document.createElement("a");
  fileLink.href = URL.createObjectURL(blob);
  fileLink.download = fileName;

  // Append the link to the body and trigger a click
  document.body.appendChild(fileLink);
  fileLink.click();

  // Remove the link from the body
  document.body.removeChild(fileLink);
}

function mostrarLog() {
  const sorteioContainer = document.getElementById("sorteioContainer");
  sorteioContainer.innerHTML = "";
  const areasContainer = document.getElementById("areasContainer");
  areasContainer.classList.add("d-none");

  infoContainer.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.print();
}

// ALERTAS

function exibirAlerta(tipo, mensagem) {
  ocultarAlerta();
  const customAlert = document.getElementById("customAlert");
  const customAlertMessage = document.getElementById("customAlertMessage");

  // Defina a classe e a mensagem do alerta
  customAlert.className = `alert alert-${tipo} alert-dismissible fade show`;

  // Centralize o texto usando a propriedade de texto alinhado
  customAlert.style.textAlign = "center";
  customAlertMessage.innerText = mensagem;

  // Exiba o alerta
  customAlert.style.display = "block";

  setTimeout(() => {
    customAlert.style.display = "none";
  }, 4000);
}

function ocultarAlerta() {
  const customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
}
