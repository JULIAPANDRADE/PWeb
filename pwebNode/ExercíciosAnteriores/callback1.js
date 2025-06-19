const prompt = require('prompt-sync')(); // é o import de stdio

function saudacao(nome) {
  console.log('oi ' + nome);
}
function entradaNome(callback) {
  let nome = prompt();
  callback(nome); //chamando a função callback saudação
}
entradaNome(saudacao);