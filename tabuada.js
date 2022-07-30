const valoresTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tabuada (num, multiplicador) {
    console.log(num + ' x ' + multiplicador + ' = ' + num * multiplicador )
}

for(let i = 0; i < valoresTabuada.length; i++){
    tabuada(valoresTabuada[i], 2)
}