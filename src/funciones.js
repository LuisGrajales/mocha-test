const pares = function (number) {
    if (number % 2 == 0){
        return true
    } else{
        return false
    }
}
const pares_array = function(array){
    let v = true
    array.forEach((e) => {
        if(e % 2 !== 0){
            v = false
        }
    })
    return v
}
const string_len = function (string=''){ 
    return string.length
}
const numero_to_day = function (number){
    switch (number) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Lunes'
        case 3:
            return 'Martes'
        case 4:
            return 'Miercoles'
        case 5:
            return 'Jueves'
        case 6:
            return 'Viernes'
        case 7:
            return 'Sabado'
    }
}
const hora = function(){
    let hoy = new Date()
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return hora
}
const order_array = function (array){
    return array.sort((a,b) => a-b)
}
const string_to_upercase =function (string){ 
    return string.toUpperCase()
}
module.exports = {
    pares,
    pares_array,
    string_len,
    numero_to_day,
    hora,
    order_array,
    string_to_upercase
}