let vez = 'X'
let jogo = true

const resultado = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

const jogar = (id) => {
    const casa = document.getElementById(id)

    if(jogo === true){
        if (casa.innerHTML == ''){
            if(vez == 'X'){
                casa.innerHTML = 'X'
                vez = '0'
            }else {
                casa.innerHTML = '0'
                vez = 'X'
            }
    }
    
resultado.forEach(item => {
    const casa1 = document.getElementById(item[0]).innerHTML
    const casa2 = document.getElementById(item[1]).innerHTML
    const casa3 = document.getElementById(item[2]).innerHTML

    if(casa1 == 'X' && casa2 == 'X' && casa3 == 'X'){
        alert('X venceu!')
        jogo = false
    }

    if(casa1 == 'O' && casa2 == 'O' && casa3 == 'O'){
        alert('O venceu!')
        jogo = false
    }
})
}
}

    