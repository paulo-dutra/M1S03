const mensagemOla = (nome) => {
    return(`Olá, ${nome}!`)
}

function getName(){
    let nome = document.getElementById("nome").value
    alert(mensagemOla(nome))
}

// console.log(mensagemOla("Mariana"))



