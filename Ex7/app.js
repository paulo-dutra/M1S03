const destructObj = ({ nome, idade, profissao } = obj) => {
    return (`Esta é ${nome}, tem ${idade} anos e é ${profissao}`)
}

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};

console.log(destructObj(pessoa))