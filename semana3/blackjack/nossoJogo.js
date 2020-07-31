/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 **/ 

  console.log("Bem vindo ao jogo de Blackjack!")

  	if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"



    const carta1US = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
    const carta2US = comprarCarta()
    const carta1CO = comprarCarta()
    const carta2CO = comprarCarta()

    const valorCartUS = carta1US.valor+carta2US.valor
    const valorCartCO = carta1CO.valor+carta2CO.valor
    
    console.log("Usuário - cartas: " ,carta1US.texto, " " ,carta2US.texto, "- pontuação " ,valorCartUS) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)

    console.log("Computador - cartas: " ,carta1CO.texto, " " ,carta2CO.texto, "- pontuação " ,valorCartCO) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
    if (valorCartUS > valorCartCO) {

    	console.log("O Usuário ganhou!")

    }else if(valorCartCO > valorCartUS){

    	console.log("O Computador ganhou!")

    }else if(valorCartUS === valorCartCO){

    	console.log("Empate!")
    }

} else {
	console.log("O jogo acabou")
}










