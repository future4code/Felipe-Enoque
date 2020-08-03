//Exercicio 1:

//a. true false

//b. true false true

//c. false

//e. booleano

//Exercicio 2:

//a. undefined

//b. null

//c.  10

//d. 0

//e. 19

//f. i+6 


//Exercicios de excrita de codigo:
//Exercicio 1:

//a.
//let idade = Number(prompt("Qual a sua idade :"))

//b.
//let idadm = Number(prompt("Qual a idade do seu melhor amigo(a) :"))
//let resultid = idade >= idadm
//let difer = idade - idadm

//c.
//console.log("Sua idade é maior do que a do seu maior amigo ?")
//console.log(resultid)
//console.log("A diferença de idade entre voces é :")
//console.log(difer)
//const diferente = number(idade) - Number(idadma)


//Exercicio 2:

//a.

//let nump = Number(prompt("Digite um numero pa :"))

//b.
//let rest = nump%2

//console.log(rest)

//c.
//o padrão é que dividindo um numero par por dois o resto sempre é 0

//d.
//se um numero impar for digitado tem um resto sempre 


//Exercicio 3:

//a.
//let listadetarefa = []

//let taref1 = prompt("Digite uma tarefa sua :")
//let teref2 = prompt("Digite outra tarefa sua :")
//let taref3 = prompt("Digite mais uma tarefa :")

//listadetarefa.push(taref1)
//listadetarefa.push(taref2)
//listadetarefa.push(taref3)

//console.log(taref1)
//console.log(taref2)
//console.log(taref3)


//Exercicio 4 :


//let name = prompt("Digite seu nome :")
//let email = prompt("Digite seu email :")


//console.log("O e-mail " , email , " foi cadastrado com sucesso. Seja bem-vinda(o)," , name)




//SEMANA3 AULA11://////////////////////////////////////////////////////////////////////////////////////


//Exercicio 1:

//Pede ao usuario que digite um numero para testar e transfoma ele de String para Number
//põe uma condicional que se o resto de uma divisão com o numero 2 for 0 ele passa no if
//se não for zero roda o else.

//Esse if vai passar a mensagem "Passou no teste" quando o numero for par

//A mensagem "Passou no teste" não seráexibida em numeros impares.


//Exercicio 2:

//a.
//Para colocar os preços nas frutas.

//b.
//O preço da fruta Maçã é R$ 2.25

//c.
//O preço da fruta Pêra é R$ 5.5 5


//Exercicio 3:

//a.
//Está criando uma variável que não pode ser alterada depois
//com nome numero e pede ao usuario que digite o valor dessa
//variável e transforma de String para Number

//b.
//Se o numero for 10 mostrara "Esse número passou no teste"
//Se for o numero -10 não aparecerá nada.

//c.
//Acontecerá um erro porque a variável de mensagem pro numero 
//-10 está dentro do if ou seja pertence a um bloco que não permite
//acesso externo


//Exercícios de escrita de código
//Exercício 4:

//1. //2.
//const idade = Number(prompt("Digite sua Idade :"))


//3.
//if (idade >= 18) {
//	console.log("Você pode dirigir")
//}else{
//	console.log("Você não pode dirigir")
//}




//Exercício 5:
//const turnE = prompt("Digite seu turno de estudo: M = Matutino; V = Vespertino; N = Noturno. :")

//if (turnE === "M") {
//	console.log("Bom Dia!")
//}else if (turnE === "V"){
//	console.log("Boa Tarde!")
//}else if (turnE === "N"){
//	console.log("Boa Noite!")
//}else{
//	console.log("Turno não identificado tente novamente.")
//}

//Exercício 6:

//const turnE = prompt("Digite seu turno de estudo: M = Matutino; V = Vespertino; N = Noturno. :")

//switch (turnE){
//	case "M":
//		console.log("Bom Dia!")
//		break
//	case "V":
//		console.log("Boa Tarde!")
//		break
//	case "N":
//		console.log("Boa Noite!")
//		break
//	default:
//		console.log("Turno não identificado tente novamente.")
//		break
//}


//Exercício 7:

//const filmG = "fantasia" && 15
//const film = prompt("Digite o genero do filme que quer assistir :")
//const prec = Number(prompt("Digite o preço do ingresso R$: "))

//let filmU = film && prec

//switch (filmU){
//	case "fantasia" && 15:
//	console.log("Bom filme")
//	break
//	default:
//	console.log("Escolha outro filme :(")
//} 


////SEMANA3 AULA12 //////////////////////////////////////////////////////////////////////

//Exercícios de interpretação:

//Exercício 1:

//Cria uma variavel com valor 0 abre uma estrutura de repetição do tipo for dentro 
//cria uma variavel pra contar a repetição do loop em seguida a condição para dar 
//continuidade ao loop depois ele soma mais 1 e dentro do for é somado mais o valor
//da variavel criada para contar a repetição a variavel valor criada com valor zero 
//no inicio, Fora do loop temos um comando pra mostrar no console a variavel valor.

//O resultado mostrado no console é 0, porque a soma na variavel valor so pode ser 
//acessada dentro do for.


//Exercício 2:

//a.
//Todos os numeros do Array lista maiores que 18 um em cada linha.

//b.
//No for...of... não é permitido acessar os índices



//Exercícios de escrita de código 

//Exercício 3:

//a.
//const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//for (let numero of numeros ) {
//	console.log(numero)
//}


//b.
//const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//for (let numero of numeros ) {
//	console.log(numero / 10)
//}


//c.
//const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//for (let numero of numeros ) {
//	if (numero%2 === 0) {
//	console.log(numero)
	
//}
//}


//d.
//const numeros = ["O elemento do índex 0 é 80" ,
//				 "O elemento do índex 1 é 30" , 
//				 "O elemento do índex 2 é 130" , 
//				 "O elemento do índex 3 é 40 ", 
//				 "O elemento do índex 4 é 60 ", 
//				 "O elemento do índex 5 é 21 ", 
//				 "O elemento do índex 6 é 70 ", 
//				 "O elemento do índex 7 é 120 ", 
//				 "O elemento do índex 8 é 90 ", 
//				 "O elemento do índex 9 é 103 ", 
//				 "O elemento do índex 10 é 110 ", 
//				 "O elemento do índex 11 é 55 "]
//
//for (let numero of numeros ) {
//	console.log(numero)
//}


//e.

//const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//let maxnum = 0
//let minnum =140

//for (let numero of numeros ) {
//	if (numero > maxnum) {
//		maxnum = numero
//	
//
//	}
//	if (numero < minnum) {
//		minnum = numero
//		
//	}
//
//
//	
//}
//	console.log(maxnum)
//	console.log(minnum)




///////////////////////////////////////SEMANA4 AULA13 //////////////////////////////////////////////////////////////////////

//Exercício de interpretação

//Exercício 1

//a.
//inicia uma função que multiplica por cinco o numero declarado em um variável
//

//b.
//Nada aconteceria, Nada iria aparecer



//Exercício 2

//a.
//Darvas
//Goli

//b.
//Amanda
//Caio



//Exercício 3
//
//essa função manda numeros para dentro de um for... of...
//onde é verificado se o numero e pa se for ela multiplica 
//por ele mesmo e adiciona em outro array que é chamado no
//return.
//Um bom nome para essa função seria verificaPa.



////////////////////////////////Exercício de esscrita de código ////////////////////////////////////////////


//Exercício 1








