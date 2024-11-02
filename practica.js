/* 
Titulo: Maquina dispensadora
Descripción: 
Se requiere escribir un programa que tenga  las opciones
con los siguientes productos:

1.Gaseosa : S/2.00
2.Papitas: S/3.00
3.Galleta: S/1.00
4.Agua Mineral: S/4.00

El usuario debera ingresar una opcion y luego deberá ingresar la moneda,
solo se admite un valor maximo de moneda de S./5.00.

El programa deberá retornar el vuelto y escribir en pantalla el producto 
que acaba de comprar. 

El programa debe reconocer si el monto de la moneda ingresada es menor al precio del producto elegido debera escribir en pantalla que el saldo es insuficiente.
*/
let nomproducto="";
let moneda=0;
let idproducto=0;
let precioProd=0;
let acumulador=0;

idproducto= Number(prompt(`
 ==========================
 1.Gaseosa: 🥤  S/2.00 
 2.Papitas: 🍟 S/3.00
 3.Galleta: 🍪 S/1.00
 4.Agua Mineral: 🍶 S/4.00
 ==========================
 Ingresa la opcion:
 `));
 console.log(`Ud. eligió la opción: `+idproducto);

var producto = {
    idprod : [0,1,2,3,4],
    nomprod:["Ninguno","Gaseosa","Papitas","Galleta","Agua Mineral"],
    prec: [0,2.0,3.0,1.0,4.0]
}

precioProd = producto.prec[idproducto];
nomproducto = producto.nomprod[idproducto];
console.log(`El producto es ` +nomproducto + `, y su precio es: s/.`+precioProd)
moneda= Number(prompt(`  Ingresa la moneda:`));

 console.log(moneda);

if(moneda>0 && moneda<=5){
    if(moneda < precioProd){
        alert("Saldo insuficiente");
    }
    else if(moneda === precioProd){
        alert(`Recoja su ` + nomproducto+` .No hay vuelto`);
    }else if(moneda>precioProd){
        let vuelto= moneda - precioProd;
        alert(`Recoja su ` + nomproducto+` .Su vuelto es s/. `+vuelto);
    }
}else if(moneda<0){
    alert(`Moneda inválida`);
}else if(moneda>5){
    alert(`Solo se aceptan monedas menores o iguales a S/.5.00`);
}

//function calcularVuelto(moneda){   
//   if(moneda!=0.1 || moneda!=0.2 ){
    
//   }
//}

// function validarmoneda(moneda){   

//    if(moneda!=0.1 || moneda!=0.2 || moneda!=0.5 || moneda!=1 || moneda!=2 || moneda!=5){
//     moneda= Number(prompt(`Moneda inválida. Ingrese otra moneda`));
//    }
//    return moneda;
// }

// calcularVuelto();



// console.log(`Object:  ${JSON.stringify(producto)}`)
// console.log(`precio2: ${producto.prec[idproducto]}`)


// function BuscarNombreProductoSeleccionado(opcion){
//     switch (opcion) {
//         case 1:
//             nomproducto="Gaseosa: 🥤  S/2.00";
//             break;
//         case 2:
//             nomproducto="Papitas: 🍟 S/3.00";
//             break;
//         case 3:
//             nomproducto="Galleta: 🍪 S/1.00";
//             break;
//         case 4:
//             nomproducto="Agua Mineral: 🍶 S/4.00";
//             break;
//         default:
//             alert(`Opción incorrecta. Vuelva a escoger`);
//             break;
//     }
// }

// BuscarNombreProductoSeleccionado();





