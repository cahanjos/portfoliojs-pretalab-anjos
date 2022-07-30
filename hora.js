let hora
const verificador = document.querySelector('#verificador')

function clicar () {
const horaInput = document.querySelector('#hora')
hora = horaInput.value

const separador = hora.indexOf(':')

if(separador === -1){
    verificador.innerHTML = 'HORÁRIO INVÁLIDO'
}
const arrayHora = hora.split(':')
const valorHora = arrayHora [0]
const valorMin = arrayHora [1].split('', 2). toString()

console.log(valorMin)

if(valorMin >= 60) {
    verificador.innerHTML = 'HORÁRIO INVÁLIDO'
} else{
    hora = valorHora
}

if(hora >= 6 && hora < 12) {
    verificador.innerHTML = 'MANHÃ'
} else if (hora >= 12 && hora < 18) {
    verificador.innerHTML = 'TARDE'
}else if (hora >= 18 && hora < 24 || hora === 0) {
    verificador.innerHTML = 'NOITE'
}else if (hora > 0 && hora < 6) {
verificador.innerHTML = 'MADRUGADA'
}else {
verificador.innerHTML = 'HORÁRIO INVÁLIDO'
    }
}