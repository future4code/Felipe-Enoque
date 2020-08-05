function funcaoIni() {
	const valorTar = document.getElementById("tarefa")
	let tarefa = valorTar.value


	const diaTar = document.getElementById("dias-semana")
	let dia = diaTar.value



	switch (dia) {

		case "domingo" :

		const diaDomingo = document.getElementById("domingo")
		diaDomingo.innerHTML += tarefa



		break

		case "segunda" :

		const diaSegunda = document.getElementById("segunda")
		diaSegunda.innerHTML += tarefa

		break

		case "terca" :

		const diaTerca = document.getElementById("terca")
		diaTerca.innerHTML += tarefa

		break

		case "quarta" :

		const diaQuarta = document.getElementById("quarta")
		diaQuarta.innerHTML += tarefa

		break

		case "quinta" :

		const diaQuinta = document.getElementById("quinta")
		diaQuinta.innerHTML += tarefa

		break

		case "sexta" :

		const diaSexta = document.getElementById("sexta")
		diaSexta.innerHTML += tarefa

		break

		case "sabado" :

		const diaSabado = document.getElementById("sabado")
		diaSabado.innerHTML += tarefa

		break

		default:

		alert("Puxa não foi dessa vez que voce conseguir")

		break

	}
	if (tarefa === "") {
		alert("Puxa não foi dessa vez que voce conseguir")
	}

	document.getElementById("tarefa").value="";


}