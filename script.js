alert('Que horas são?!')
//Puxamos a data e as horas
var lm = new Date()
var h = lm.getHours()
var m = lm.getMinutes()
var s = lm.getSeconds()
var d = lm.getDay()
var dia = lm.getDate()
var mes = lm.getMonth()
var ano = lm.getFullYear()

//Puxamos o id das tags e transformamos em variavel 
var txthr = document.getElementById('txthr')
var back = document.getElementById('back')
var txtdia = document.getElementById('txtdia')
var hr = document.getElementById('hr')
var sec = document.getElementById('sec')
var daa = document.getElementById('daa')
var fto = document.getElementById('fto')

//definido o dia e as horas
daa.innerHTML = `${dia}/${mes}/${ano}`
txthr.innerHTML = `Agora são exatamente ${h}:${m}:${s}`

//Condição para mudar o nome do momento do dia e o background da section
if(h >= 0 && h < 5){
    hr.innerHTML = 'Madrugada'
    sec.style.background = '#B0E0E6'
}else if (h >= 5 && h < 12){
    hr.innerHTML = 'Manhã'
    sec.style.background = '#FAFAD2'
}else if(h >= 12 && h < 18){
    hr.innerHTML = 'Tarde'
    sec.style.background = '#FFE4B5'
}else if(h >= 18 && h <0){
    hr.innerHTML = 'Noite'
    sec.style.background = '#E0FFFF'
}

//condição para mudar o background do body de acordo com a hr
if (h >= 0 && h < 5){
    back.style.background = '#00008B'
    fto.src = 'madrugada.png'
}else if(h >= 5 && h < 12){
    back.style.background = '#FFA500'
    fto.src = 'manha.png'
}else if(h >= 12 && h < 18){
    back.style.background = '#FF8C00'
    fto.src = 'tarde.png'
}else if(h >= 18 && h < 0){
    back.style.background = '#191970'
    fto.scr = 'noite.png'
}

//definir o dia de acordo com o dia atual
switch (d){
    case 0:
        txtdia.innerHTML = 'Domingo'
        break
    case 1:
        txtdia.innerHTML = 'Segunda'
        break
    case 2:
        txtdia.innerHTML = 'Terça'
        break
    case 3:
        txtdia.innerHTML = 'Quarta'
        break
    case 4:
        txtdia.innerHTML = 'Quinta'
        break
    case 5:
        txtdia.innerHTML = 'Sexta'
        break
    case 6:
        txtdia.innerHTML = 'Sábado'
        break

}