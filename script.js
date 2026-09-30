// Validação do formulário com mensagens específicas para cada erro (Desafio)
function validarFormulario(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg = document.getElementById("mensagem");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  msg.className = "mensagem";

  if (nome === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo Nome é obrigatório!";
    return;
  }

  if (email === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo E-mail é obrigatório!";
    return;
  }

  if (!regexEmail.test(email)) {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O e-mail informado é inválido!";
    return;
  }

  if (idade === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo Idade é obrigatório!";
    return;
  }

  if (isNaN(idade) || Number(idade) <= 0) {
    msg.classList.add("erro");
    msg.textContent = "⚠️ Digite uma idade válida!";
    return;
  }

  msg.classList.add("sucesso");
  msg.textContent = "✅ Formulário enviado com sucesso!";
}

// Função JS para o Teste de Unidade
function multiplicar(a, b) {
  return a * b;
}

// Teste automatizado com console.assert()
function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6, "Erro: 2 * 3 deve ser 6");
  console.assert(multiplicar(-2, 4) === -8, "Erro: -2 * 4 deve ser -8");
  console.assert(multiplicar(5, 0) === 0, "Erro: 5 * 0 deve ser 0");
  
  console.log("✅ Todos os testes de multiplicação passaram!");
}

// Executa o teste ao carregar a página
testarMultiplicacao();