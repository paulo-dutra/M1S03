const somaTudo = (...numeros) => {
    let soma = 0
    numeros.forEach(numero => {
        soma += numero
    });
    return soma;
}

console.log(somaTudo(1, 2, 3, 4))