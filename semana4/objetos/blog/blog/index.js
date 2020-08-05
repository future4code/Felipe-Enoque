


	

	
	function test(){ 

		const tituloPost = document.getElementById("titulo-post")
	let tituloP = tituloPost.value

	const autorPost = document.getElementById("autor-post")
	let autorP = autorPost.value

	const conteudoPost = document.getElementById("conteudo-post")
	const conteudoP = conteudoPost.value


	const post = {

		titulo: tituloP,
		autor: autorP,
		conteudo: conteudoP,

	}

	const arrayTeste = [post.titulo, post.autor , post.conteudo]

	const postaPost = document.getElementById("container-de-posts")
		postaPost.innerHTML += `<h1><p>${post.titulo}</p></h1>
								<h6><p>${post.autor}</p></h6>
								<p>${post.conteudo}</p>`

	// const arrayTeste = [post.titulo, post.autor , post.conteudo]
	// console.log(arrayTeste)


	// const arryPost = post.titulo
	// console.log(arryPost)
	// const arryPA = post.autor
	// console.log(arryPA)
	// const arryPC = post.conteudo
	// console.log(arryPC)








	// const testT = post.titulo
	// console.log(testT)
	// const testA = post.autor
	// console.log(testA)
	// const testC = post.conteudo
	// console.log(testC)

   document.getElementById("titulo-post").value="";
   document.getElementById("autor-post").value="";
   document.getElementById("conteudo-post").value="";


	}

