function carregar(){
    //chamar as info
    var ln = new Date()
    var data = ln.getDate()
    var dia = ln.getDay()
    var mes = ln.getMonth()
    var ano = ln.getFullYear()
    var hora = ln.getHours()
    var minuto = ln.getMinutes()
    var segundo = ln.getSeconds()

    //chamar as variaveis
    var back = document.getElementById('back')
    var hr = document.getElementById('hr')
    var sec = document.getElementById('sec')
    var txthr = document.getElementById('txthr')
    var img = document.getElementById('img')
    var txtdia = document.getElementById('txtdia')
    var daa = document.getElementById('daa')


    //difinir o dia de acordo com o dia atual
    switch (dia){
        case 0:
            daa.innerHTML = 'Domingo'
            break
        case 1:
            daa.innerHTML = 'Segunda'
            break
        case 2:
            daa.innerHTML = 'Terça'
            break
        case 3:
            daa.innerHTML = 'Quarta'
            break
        case 4:
            daa.innerHTML = 'Quinta'
            break
        case 5:
            daa.innerHTML = 'Sexta'
            break
        case 6:
            daa.innerHTML = 'Sábado'
            break
    }

    //mostrar a data e a hr

    txthr.innerHTML = `${hora}:${minuto}:${segundo}`
    txtdia.innerHTML = `${data}/${mes}/${ano}`

    //mudar as configurações de acordo com a hr
    if(hora >= 0 && hora < 5){
        hr.innerHTML = 'Madrugada'
        back.style.background = '#00008B'
        sec.style.background = '#B0E0E6'
        img.src = 'madrugada.png'
    }else if(hora >= 5 && hora < 12){
        hr.innerHTML = 'Manhã'
        back.style.background = '#FFA500'
        sec.style.background = '#FAFAD2'
        img.src = 'manha.png'
    }else if(hora >= 12 && hora <18){
        hr.innerHTML = 'Tarde'
        back.style.background = '#FF8C00'
        sec.style.background = '#FFE4B5'
        img.src = 'tarde.png'
    }else{
        hr.innerHTML = 'Noite'
        back.style.background = '#191970'
        sec.style.background = '#E0FFFF'
        img.src = 'noite.png'
    }
    
}