let vez = 'X'

function jogar(id) {
    const tabuleiro = window.document.getElementById (id)

    if(tabuleiro.innerHTML == ""){
    if(vez==="X") {
        tabuleiro.innerHTML = "X"
        vez = "O"
    }
    else {
        tabuleiro.innerHTML = "O"
        vez = "X"
    }
}

}

const resultado = [
    [id="1",id="2",id="3"],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]

  