// Obtém o formulário
//var form = document.getElementById('cadastroForm');

// Adiciona um ouvinte de evento para a submissão do formulário
//form.addEventListener('submit', function(event) {
  //event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos de entrada
  //var nome = document.getElementById('nome').value;
  //var email = document.getElementById('email').value;
  //var senha = document.getElementById('senha').value;

  // Realiza o processamento dos dados (por exemplo, envio para o servidor)
  // ...
//});
//form.addEventListener('submit', function(event) {
  //  event.preventDefault();
  
    //var nome = document.getElementById('nome').value;
    //var email = document.getElementById('email').value;
    //var senha = document.getElementById('senha').value;
  
    //var dados = {
      //nome: nome,
      //email: email,
      //senha: senha
    //};
  
    // Envia os dados para o servidor
    //fetch('url_do_seu_endpoint', {
      //method: 'POST',
      //headers: {
        //'Content-Type': 'application/json'
      //},
      //body: JSON.stringify(dados)
    //})
    //.then(function(response) {
      // Manipula a resposta do servidor
      // ...
    //})
    //.catch(function(error) {
      // Manipula erros de requisição
      // ...
    //});
  //});
  document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Captura os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    // Realiza as validações necessárias
    if (nome === "" || email === "" || senha === "") {
      document.getElementById("mensagem").innerHTML = "Preencha todos os campos.";
      return;
    }
  
    // Processa os dados, por exemplo, enviando para um servidor
    // Aqui você pode utilizar Ajax ou fazer um pedido HTTP para o backend
    // para salvar os dados do formulário.
  
    // Exemplo de exibição de mensagem de sucesso
    document.getElementById("mensagem").innerHTML = "Cadastro realizado com sucesso!";
  });
  