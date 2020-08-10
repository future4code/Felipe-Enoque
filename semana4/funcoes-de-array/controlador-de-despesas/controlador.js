
	// const valDespe = document.getElementById("valor-despesa")
	// let valorDespesa = valDespe.value

	// const tipDespe = document.getElementById("tipo-despesa")
	// let tipoDespesa = tipDespe.value

	// const desDespesa = document.getElementById("desc-despesa")
	// let descricaoDespesa = desDespesa.value


	let arrayDespesa = []

	function cadastraDespesas(){

		const valDespe = document.getElementById("valor-despesa")
	let valorDespesa = valDespe.value

	const tipDespe = document.getElementById("tipo-despesa")
	let tipoDespesa = tipDespe.value

	const desDespesa = document.getElementById("desc-despesa")
	let descricaoDespesa = desDespesa.value
	

	if (valorDespesa !== "" && tipoDespesa !== "tipo" && descricaoDespesa !== "") {
	

			const despesa = {

				valor: Number(valorDespesa),
				tipo: tipoDespesa,
				descricao: descricaoDespesa,

			}

			arrayDespesa.push(despesa)
			console.log(arrayDespesa)

			// arrayDespesa.forEach(veriValores)

			//const arrayDespesa = [despesa.valor, despesa.tipo , despesa.descricao]

			// console.log(arrayDespesa)

		}else if (valorDespesa === ""){

			alert("Adicione um valor")

				}else if (tipoDespesa === "tipo") {

					alert("Adicione um tipo de despesa")

						}else if (descricaoDespesa === ""){

							alert("Adicione uma descricao")

								}




	document.getElementById("valor-despesa").value="";
	document.getElementById("tipo-despesa").value="tipo";
	document.getElementById("desc-despesa").value="";
}	




function funFilt(){

	const veriValores = arrayDespesa.filter((valoresArray, index, array) => {

		if (tipoDespesaDetal !== "tipo") {
	   
		const addDespesa = document.getElementById("teste")


		addDespesa.innerHTML = `<p>${arrayDespesa.valor}</p>`

		}

})



	// const veriValores = arrayDespesa.filter((valoresArray, index, array) => {
	//     if (valoresArray !== "" && valoresArray !== "tipo") {
	//         return true
	//     } 
	//     return false
	// })

	// veriValores.innerHTML = `<span></apan>`
// 	console.log(veriValores)

}

function limpFilt(){

	document.getElementById("valor-minimo").value="";
	document.getElementById("tipo-despesa-detal").value="tipo";
	document.getElementById("valor-maximo").value="";
}