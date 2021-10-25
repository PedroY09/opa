function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //BB
                img.setAttribute('src', 'BBmenino.png')
                res.innerHTML = `Ele é um bebê de ${idade} Anos.`
            }else if(idade >= 10 && idade < 25){
                //jovem
                img.setAttribute('src', 'JovemMascu.png')
                res.innerHTML = `Ele é um Jovem de ${idade} Anos`
            }else if(idade >= 25 && idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
                res.innerHTML = `Ele é um Adulto de ${idade} Anos.`
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
                res.innerHTML = `Ele é um Idoso de ${idade} Anos.`
            }
        }else if (fsex[1]){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //bb
                img.setAttribute('src','BBmenina.png')
                res.innerHTML = `Ela é uma Bebê de ${idade} Anos.`
            }else if(idade >=10 && idade <25){
                //jovem
                img.setAttribute('src', 'jovemMuie.png')
                res.innerHTML = `Ela è uma Adolescente de ${idade} Anos.`
            }else if(idade >=25 && idade <50){
                //adulto
                img.setAttribute('src', 'adulta.png')
                res.innerHTML = `Ela é uma Adulta de ${idade} Anos.`
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
                res.innerHTML = `Ela é uma Idosa de ${idade} Anos.`
            }
        }
        
        res.appendChild(img)
    }


} 