let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) !=-1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor invalido ou já inserido!')
    }
    num.value = '' //deixa a caixa em branco
    num.focus() //Deixa o local no pronto para receber os dados

}

function analisar(){
    if (valores.length == 0) {
        window.alert ('Adicione valores para Analisar.')
    } else {
        let qtd = valores.length //conta qtde de itens na array valores
        let maior = valores[0] //var que armazena maior valor na posição 0
        let menor = valores[0] // armazena menor valor em 0
        let soma = 0
        let media = 0
        for(let pos in valores) { // pecorre o array e armazena em pos
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos] // armazena em pos o maior valor
            if (valores[pos] < menor)
                menor = valores[pos] // armazena em pos o menor valor
        }
        media = soma/qtd
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, ${qtd} números foram cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos dados inseridos é ${media}.</p>`
    }
}