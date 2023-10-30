//  EJERCICIO 1 Suma de elementos en un array:

let b = [2,43,5,76,8,9];
let suma = 0;
for (let i= 0; i < b.length; i++) {
    let a = b[i];
    suma = a+suma;
    }
    console.log("la suma es: " +suma);
// EJERCICIO 2 Filtrar números pares:

let c = [2,3,4,5,6,7,8,9,10];
let par =[];
for (let d = 0; d < c.length; d+=2) {
    let e = c[d];
    par.push(c[d]);
}
console.log("numeros pares: "+par);

// EJERCICIO 3 Encontrar el elemento más grande:

let f = [1,2,3,4,10,6];
console.log("el valor mayor es: " +Math.max(...f));


// EJERCICIO 4  Contar ocurrencias

let k = [2,2,4,5,6,6,6,8,9,9];
let contador = 0;
let nu = 6;
for (let l = 0; l < k.length; l++) {
    if (nu == k[l] ){ 
        contador++;
    }
}
console.log("el numero " + nu + " se repite : "  + contador );

// EJERCICIO 5 Invertir un array

let array = [1,2,3,4,5,6,7,8,9,10];
let reversed = array.reverse();
console.log( 'reversed : ', reversed);

// EJERCICIO 6 Eliminar duplicados

let numerosDobles = [1,2,4,5,7,7,7,8,9]
let pos = 4;
   borrar = 3;

let eliminados = numerosDobles.splice(pos,borrar);
console.log("la respuesta es: " + numerosDobles);

// EJERCICIO 7  Ordenar un array de cadenas
let alfa = ['f','j','a','c','b','d','e'];
alfa.sort();
console.log("ordenado es: "+alfa);

// EJERCICIO 8 Concatenar arrays 

let unido = numerosDobles.concat(alfa);
console.log("arrays unidas: "+unido);

// EJERCICIO 9 Filtrar por longitud:


array.length = 5;
printEntries(array);
 
function printEntries(array) {
    let length = array.length;
    for (let m = 0; m < length; m++) {
      console.log(array[m]);
    }
    console.log("listo");
  }

// EJERCICIO 10 Mapear y transformar:

let mapa = [2,3,4,5,6];
doble = (x) => x 
let dos = mapa.map(doble);

let fin = mapa.concat(dos);
console.log(fin);


  
