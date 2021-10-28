function Gerar(){
    var numer = parseInt(document.getElementById('txti').value)
    var res = document.getElementById('resposta')
    var tab = '' 

    for(var conta=1; conta<=10; conta++)
    tab += numer+" x "+conta+" = "+
               numer*conta+"<br />";
        res.innerHTML = tab
}
    
