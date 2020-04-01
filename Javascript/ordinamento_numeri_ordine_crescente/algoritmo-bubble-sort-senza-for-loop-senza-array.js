/**
 **  Algoritmo di ordinamento bubble sort senza for loop e senza array
 **
*/

"use strict"

let a = prompt("primo numero",1)*1;
let b = prompt("secondo numero",1)*1;
let c = prompt("terzo numero",1)*1;
let temporaneo;

if(a>b){
  temporaneo = a;
  a = b;
  b = temporaneo;
 if(b>c){
   b = c;
   c = temporaneo;
   if(a>b){
     temporaneo = a;
     a = b;
     b = temporaneo;
   }
  }
}
else if(b>c){
  temporaneo = b;
  b = c;
  c = temporaneo;
  if(a>b){
    temporaneo = a;
    a = b;
    b = temporaneo;
  }
}

console.log(a,b,c);
