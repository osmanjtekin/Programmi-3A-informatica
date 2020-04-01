/**
 **  Algoritmo di ordinamento bubble sort
 **
*/

"use strict"

let a = prompt("primo numero",1);
let b = prompt("secondo numero",1);
let c = prompt("terzo numero",1);
let lista = [a*1,b*1,c*1];
let temporaneo;

for(let posizione=0; posizione<lista.length-1; ++posizione){
  for(let pos_intern = 0; pos_intern<(lista.length-posizione-1); ++pos_intern){
  if(lista[pos_intern]>lista[pos_intern+1]){
    temporaneo = lista[pos_intern];
    lista[pos_intern] = lista[pos_intern+1];
    lista[pos_intern+1] = temporaneo;
  }
  }
}
  
console.log(lista);
