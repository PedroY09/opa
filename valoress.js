//Chamando as variaveis

var numero = document.getElementById('num')
var tab = document.getElementById('tabela')
var resultado = document.getElementById('res')
var valores = []

//Dando as funções
function pnumero(n){
    if(Number (n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function ptab (n, L){
    if(L.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function tabela(){
    if(pnumero(numero.value) && !ptab(num.value, valores)){
        alert('Tudo Ok')
    }else{
        alert('valor invalido ou ja esta na lista!')
    }
}