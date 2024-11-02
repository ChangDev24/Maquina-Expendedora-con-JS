var x = "20"
var y = 20

//Comparar valor string con number
console.log(x==y) // true
console.log(x!=y) //false


//Comparar valor y tipo de dato 
console.log(x===y) //false
console.log(x!==y) //true

//Condicionales Concatenadas
var nota = 10 

if(typeof(nota)!='number'){
    console.log("No es numero.")
}else if(nota > 11){
    console.log("Estas aprobado.")
}else{
    console.log("Estas desaprobado.")
}

var edad = 17
var suscrito = true

if(edad >= 18){
    console.log("acceder a la web")
}else if(suscrito){
    console.log("acceder a la web")
}else{
    console.log("vete a google")

}



