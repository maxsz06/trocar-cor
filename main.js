'use strict'

const btnTrocarCor = document.getElementById('trocar-cor')

function trocarCor(){

    let cor = document.getElementById('cor').value

    if (cor == "amarelo"){
        cor = 'yellow'
    }else if (cor == 'vermelho'){
        cor = 'red'
    }else if (cor == 'preto'){
        cor = 'black'
    }else if (cor == 'verde'){
        cor = 'green'
    }
    

    document.documentElement.style.setProperty('--cor-bg', cor)



}
''
btnTrocarCor.addEventListener('click',trocarCor )