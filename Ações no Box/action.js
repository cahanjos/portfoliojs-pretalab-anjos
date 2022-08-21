const div = document.querySelector('#element')

function mouseOver () {
    div.style.background = 'blue'
}

function mouseOut () {
    div.style.background = 'black'
    div.style.color = 'white'
    div.innerHTML += "<p id='saida' > Saída do mouse </p"    
    const p = document.querySelector('#saida')
    
    if(!p){
        
    }
}