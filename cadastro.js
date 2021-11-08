function ok() {
    var nome = (document.getElementById('nome').value)
    var snome = (document.getElementById('snome').value)
    var email = (document.getElementById('email').value)
    var senha = (document.getElementById('senha').value)
    var senhaa = (document.getElementById('senhaa').value)

    
    n_s(nome,snome)
    e(email)
    s_ss(senha,senhaa)
}
function n_s (n,s){

    if(n.length <= 3 && s.length <= 3){
        alert('errado')
    }
    if(n.search(/[0-9]/) <0 && s.search(/[0-9]/) <0){
    
    }else{
        alert('somente letras')
    }
}
function e(e){
    if(e==''|| e.indexOf('@') == -1 || e.indexOf('.') == -1){
        alert('email invalido')
    }     

}
function s_ss (s , ss){
    if(s.length >8){
        alert('Não pode passar de 8 caracteres')
    }
    if(s.length <5){
        alert('A senha tem que ter no minimo 8 caracteres')
    }


}