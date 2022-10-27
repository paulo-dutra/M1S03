const uneDobraRetorna = (vetor, ...restante) => {
    let restanteDobrado = []
    restante.forEach(num => restanteDobrado.push(num * 2))
    let novo_vetor = [...vetor, ...restanteDobrado]
    return (novo_vetor)
}

console.log(uneDobraRetorna([1, 2, 3, 4], 1, 2, 3, 4))