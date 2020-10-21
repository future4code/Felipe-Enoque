// const minhaString: string = "kkk"
// const minhaString: string = 12
// console.log(minhaString);

//a: acontece um erro pois ele já espera um tipo especifico;

// const meuNumero: number = 1
// const meuNumero: number = Number("ola")
// console.log(meuNumero);
//b: basta transformar a string em numero


// const pessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "Enoque",
//     idade: 30,
//     corFavorita: "Vermelho"
// }
// console.log(pessoa);
//c: basta realizar as tipages das propriedades


// d:
    // type padrão = {
    //     nome: string, 
    //     idade: number, 
    //     corFavorita: string
    // }
    // const pessoa1: padrão  = {
    //     nome: "Felipe",
    //     idade: 30,
    //     corFavorita: "Verde"
    // }
    // const pessoa2: padrão  = {
    //     nome: "Enoque",
    //     idade: 19,
    //     corFavorita: "Vermelho"
    // }
    // const pessoa3: padrão  = {
    //     nome: "Dante",
    //     idade: 28,
    //     corFavorita: "Laranja"
    // }

    // console.log(pessoa1, pessoa2, pessoa3);
    
//e:
    type padrão = {
        nome: string, 
        idade: number, 
        corFavorita: string
    }
    const pessoa1: padrão  = {
        nome: "Felipe",
        idade: 30,
        corFavorita: "Verde"
    }
    const pessoa2: padrão  = {
        nome: "Enoque",
        idade: 19,
        corFavorita: "Vermelho"
    }
    const pessoa3: padrão  = {
        nome: "Dante",
        idade: 28,
        corFavorita: "Laranja"
    }

    console.log(pessoa1, pessoa2, pessoa3);
 