function funcaoIni() {
	const valorTar = document.getElementById("tarefa")
	let tarefa = valorTar.value


	const diaTar = document.getElementById("dias-semana")
	let dia = diaTar.value



	switch (dia) {

		case "domingo" :

		const diaDomingo = document.getElementById("domingo")
		diaDomingo.innerHTML += `<p>${tarefa}</p>`



		break

		case "segunda" :

		const diaSegunda = document.getElementById("segunda")
		diaSegunda.innerHTML += `<p>${tarefa}</p>`

		break

		case "terca" :

		const diaTerca = document.getElementById("terca")
		diaTerca.innerHTML += `<p>${tarefa}</p>`
		break

		case "quarta" :

		const diaQuarta = document.getElementById("quarta")
		diaQuarta.innerHTML += `<p>${tarefa}</p>`

		break

		case "quinta" :

		const diaQuinta = document.getElementById("quinta")
		diaQuinta.innerHTML += `<p>${tarefa}</p>`
		break

		case "sexta" :

		const diaSexta = document.getElementById("sexta")
		diaSexta.innerHTML += `<p>${tarefa}</p>`

		break

		case "sabado" :

		const diaSabado = document.getElementById("sabado")
		diaSabado.innerHTML += `<p>${tarefa}</p>`

		break

		default:

		alert("Puxa não foi dessa vez que voce conseguir")

		break

	}
	if (tarefa === "") {
		alert("Puxa não foi dessa vez que voce conseguir")
	}

	document.getElementById("tarefa").value="";


 	if (key==13){

    		alert("kkkkkkk")
 		 }
	


};