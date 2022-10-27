const verificaPalindromo = (palavra) => {
    let arrayPalavra = [...palavra]
    let tamanho = arrayPalavra.length - 1

    for (i = 0; i <= tamanho; i++) {
        if (arrayPalavra[i] != arrayPalavra[tamanho - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo('ana'))