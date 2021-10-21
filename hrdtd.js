var a = new Date
var dia = a.getDay()
var date = a.getDate()
var mes = a.getMonth()
var ano = a.getFullYear()
var hora = a.getHours()
var minutos = a.getMinutes()
var segundos = a.getSeconds()
console.log(`${date}/${mes}/${ano}`)
console.log(`${hora}:${minutos}:${segundos}`)
switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')            
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break        
}

