'use strict'

// Ativa o modo estrito do JavaScript.
// Ele ajuda a evitar erros comuns, como uso de variáveis não declaradas,
// e torna o código mais seguro e previsível

const btnTrocarCor = document.getElementById('trocar-cor')

// Seleciona o elemento HTML que possui o id "trocar-cor"
// Geralmente é um botão que será usado para trocar a cor.


function trocarCor(){
     // Função responsável por alterar a cor do fundo

    let cor = document.getElementById('cor').value
     // Captura o valor digitado ou selecionado no elemento com id "cor"
     // Normalmente um input ou select


    if (cor == "amarelo"){
        cor = 'yellow'
        // Se o usuário digitar "amarelo", converte para o valor CSS "yellow"
    }else if (cor == 'vermelho'){
        cor = 'red'
        // Converte "vermelho" para "red"
    }else if (cor == 'preto'){
        cor = 'black'
           // Converte "preto" para "black"
    }else if (cor == 'verde'){
        cor = 'green'
        // Converte "verde" para "green"
    }
    

    document.documentElement.style.setProperty('--cor-bg', cor)

     // Altera o valor da variável CSS "--cor-bg"
     // document.documentElement representa o elemento <html>
     // Essa variável pode ser usada no CSS para mudar o fundo da página

}
''
btnTrocarCor.addEventListener('click',trocarCor )

    // Adiciona um evento de clique ao botão
    // Quando o botão for clicado, a função trocarCor será executada