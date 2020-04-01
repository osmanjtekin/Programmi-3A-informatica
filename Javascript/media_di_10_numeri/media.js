<script>
  "use strict"
  
  let somma = 0;
  
  
  for(let i=1; i<=10; i++){
    
    // moltiplicando per 1 convertiamo la stringa in numero, altrimenti invece di una somma si verifica una concatenazione (es. 1+2 diventa 12 invece di 3)
    let n = prompt("inserisci il numero",0)*1;
    
    // somma = somma + n
    somma += n;
  }
  
  // per fare la media dividiamo il risultato della somma per il numero delle cifre sommate
  document.write(somma/10);
  
</script>
