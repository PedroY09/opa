function calcular(){
    var ini= document.getElementById('txti') 
    var fim= document.getElementById('txtf')
    var pas= document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO]')
    }else{
        res.innerHTML = 'calculando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        for(var c = i;c <= f;c += p){
            res.innerHTML += `${c} `
        }      
    }
}