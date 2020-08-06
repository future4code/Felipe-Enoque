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


	const imgPost = document.getElementById("imagem-post").value

	 if (imgPost !== "") { 
     
     
     if (imgPost.includes('.png') || imgPost.includes('.jpg') || imgPost.includes('.jpeg')){
         postaPost.innerHTML += `<img src=${imgPost}>`
     } else {
         alert('Link incorreto! Insira imagem válida')
     	}
	 }
	


   document.getElementById("titulo-post").value="";
   document.getElementById("autor-post").value="";
   document.getElementById("conteudo-post").value="";
   document.getElementById("imagem-post").value="";


	}

