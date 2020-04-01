"use strict"

let a = prompt("primo numero", 0);
let b = prompt("secondo numero", 0);
let c = prompt("terzo numero", 0);
let min;
let medio;
let max;

// verifichiamo se a è maggiore sia di b che di c
if(a>b && a>c){
  // assegniamo subito a alla variabile max
  max = a;
  // ci sono rimasti b e c; dobbiamo verificare se b è maggiore di c e quindi se è medio
  if(b>c){
    // se lo è, assegniamolo alla variabile media
    medio = b;
    // e ovviamente c è quella minore
    min = c;
  }
  else {
    // altrimenti (se così non fosse) assegniamoli in maniera opposta
    medio = c;
    min = b;
  }
}
// anche qua verifichiamo se b è maggiore degli altri due numeri e ripetiamo le istruzioni precedenti
else if(b>a && b>c){
  max = b;
  if(a>c){
    medio = a;
    min = c;
  }
  else {
    medio = c;
    min = a;
  }
}

else if(c>a && c>b){
  max = c;
  if(a>b){
    medio = a;
    min = b;
  }
  else {
    medio = b;
    min = a;
  }
}
  
document.write(`il max è ${max}, il medio ${medio} e il minore ${min}`);
