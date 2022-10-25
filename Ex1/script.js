const procuraMinMax = (valores) => {
    if ( valores == null || valores.length == 0 ) {
        return (console.log("Não é possível encontrar."))
    }
    let maior = valores[0]
    let menor = valores[0]
    for (i = 0; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores[i]
        }
    }
    console.log(`Maior: ${maior}
Menor: ${menor}`)
}

let valores
// valores = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
// valores =  []
// valores =  [1]
// valores =  [1, -1]
// valores =  null
// valores =  [-2,-2,-2,-2] 
// valores =  [20,10, 30]  

procuraMinMax(valores)