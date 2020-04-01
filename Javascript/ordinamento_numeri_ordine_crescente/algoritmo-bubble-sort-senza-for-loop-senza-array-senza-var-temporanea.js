/**
 **  Algoritmo di ordinamento bubble sort senza for loop senza array e senza variabile temporanea
 **
*/

"use strict"

let a = prompt("primo numero",1)*1;
let b = prompt("secondo numero",1)*1;
let c = prompt("terzo numero",1)*1;

if(a>b){
  a = a+b;
  b = a-b;
  a = a-b;
 if(b>c){
   b = b+c;
   c = b-c;
   b = b-c;
   if(a>b){
     a = a+b;
     b = a-b;
     a = a-b;
   }
  }
}
else if(b>c){
  b = b+c;
  c = b-c;
  b = b-c;
  if(a>b){
    a = a+b;
    b = a-b;
    a = a-b;
  }
}

console.log(a,b,c);
