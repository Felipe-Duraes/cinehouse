const catalogo = require('../cinehouse/database/catalogo.json');

//Listar filmes em cartaz

const listarTodosOsFilmesEmCartaz = () => {
    catalogo.forEach((filme) => console.log(`nome do filme: ${filme.titulo}`))
}

//Buscar filme especifico

const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)

//Alterar status de filmes emCartaz

const alterarStatusEmCartaz = (codigo, callback) => {
    const filme = callback(codigo)
    
    if(!filme) {
        console.log("Filme não encontrado!")
            return;
    }

    //filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;
    filme.emCartaz = !filme.emCartaz
    
    return filme;
}

//Adicionar filme

const adicionarFilme = (filme) => {
    const filmeParaAdicionar = {
        ...filme,
        emCartaz: true
    }

    catalogo.push(filmeParaAdicionar)

    return filmeParaAdicionar;

}
console.log(adicionarFilme({
    codigo: 6,
    titulo: "ko",
    atores: 55,
    duracao: 1.80,
    anoDeLancamento: 2022
}))

console.log(catalogo)
// console.log(alterarStatusEmCartaz(5, buscarFilme));
// listarTodosOsFilmesEmCartaz()
