var nome = "Abner";

console.log( window.nome );

//Essa Variavel você tem acesso em toda area do seu sistema

let nomes  = "Abner";

//Essa Variavel Let faz com que ela só fique disponivel dentro do escopo que é estanciada ou seja 
//se chamar ela dentro de um if ficara só disponivel ali dentro e assim por diante

var nome = "Abner";
var nome = "Manha";

//Nesse caso por ser uma var o nome será Manha pois é o ultimo valor atribuido ao "nome"

let nome = "Abner";
let nome = "Manha";

//Nesse caso da erro pois você não consegue atribuir valor a variavel do tipo let dessa forma e sim como descrito abaixo

let nome = "Abner";
nome = "Manha";

//Dessa Forma

const nome = "Abner";

//Variavel de valor constante 

nome = "Pedro";

//Não consigo trocar o valor 

const pessoa = {nome: "Abner", sobrenome: "Manha"}

pessoa.nome = "Pedro";

//Aqui alteramos o valor porém não podemos mudar o objeto referente as pessoas



