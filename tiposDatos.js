//TODO: TIPO DE DATOS PRIMITIVOS

//Undefined
var variableSinValor
console.log(variableSinValor)

//Null
var variableNull = null
console.log(variableNull)

//String 
var nombreString = `Fran Espino`
console.log(`Nombre ${nombreString} -  ${typeof(nombreString)} `)

//Number
var edadNumber = 24 
console.log(`Edad ${edadNumber} - ${typeof(edadNumber)}`)

//Number 
var alturaNumer = 1.6
console.log(`Altura ${alturaNumer} - ${typeof(alturaNumer)}`)

//TODO: TIPO DE DATOS COMPLEJOS

//Object 
var persona = {
    nombre : nombreString,
    edad: edadNumber,
    altura: alturaNumer,
    artistas_favoritos: ["eminem","21 savege", "travis"]
}

console.log(`Object:  ${JSON.stringify(persona)}`)
console.log(`Object name ${persona.nombre}`)

//Arrays
//TODO EMPIEZA DESDE CERO!!!!
const semana = ["lunes","martes","miercoles"]
let pares = [2,4,6,8,3,10,12,14,16]
var combinado = ["lunes","martes","miercoles",2,4,6,8,10]
var arrayComplejo = [{curso: "Frontend"},"lunes","miercoles",2,4,10,persona ]
console.log(arrayComplejo[5])


let i = 0
while(i<8){
    if(pares[i] % 2 != 0){
        console.log(`${pares[i]} es impar `)
    }
    i = i + 1
}