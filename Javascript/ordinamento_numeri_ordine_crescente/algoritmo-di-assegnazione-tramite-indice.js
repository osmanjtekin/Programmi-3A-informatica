/**
 **  Algoritmo di ordinamento che utilizza i numeri come posizioni degli indici e li assegna alla stessa indice
 **
*/

"use strict"

let a = prompt("primo numero",1);
let b = prompt("secondo numero",1);
let c = prompt("terzo numero",1);
let lista = [];

lista[a] = a;
lista[b] = b;
lista[c] = c;


for(let posizione=0; posizione<lista.length; ++posizione){
  if(lista[posizione]){
    console.log(lista[posizione]);
  }
}
