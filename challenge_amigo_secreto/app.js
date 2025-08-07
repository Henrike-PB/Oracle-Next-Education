// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista na página
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validação para campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo input para novo nome
  input.value = "";

  // Atualiza a lista na página
  atualizarLista();
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
  const lista = document.getElementById("lista-amigos");

  // Limpa a lista existente (para evitar duplicatas)
  lista.innerHTML = "";

  // Para cada nome no array, cria um elemento <li> e adiciona à lista
  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  // Verifica se o array amigos possui pelo menos um nome
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return;
  }

  // Gera um índice aleatório entre 0 e amigos.length - 1
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado usando o índice aleatório
  const nomeSorteado = amigos[indiceAleatorio];

  // Atualiza o conteúdo do elemento de resultado para mostrar o amigo secreto
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = `Amigo secreto: <strong>${nomeSorteado}</strong>`;
  }
}

function limparLista() {
  // Limpa o array que armazena os nomes
  amigos = [];

  // Limpa a lista de amigos na página
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";


  
  // Limpa o resultado do sorteio
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = "";
  }
}
