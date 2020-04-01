let audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

function beep(durata) {
    let oscillatore = audioCtx.createOscillator();

    oscillatore.connect(audioCtx.destination);
    oscillatore.start();
  
    setTimeout( ()=>{oscillatore.stop()}, durata);
};

let chrDict = {
  "a": ".-",
  "e": ".",
  "i": "..",
  "o": "---",
  "u": "..-"
  }

let vocale = prompt("inserisci una vocale",0);

if(chrDict[vocale]){
  for(let i=1;i<chrDict[vocale].length+1;i++){
    let lunghezzaSuono = chrDict[vocale][i-1]=="." ? 100 : 200;
    setTimeout( ()=>{beep(lunghezzaSuono); document.write(chrDict[vocale][i-1])
                    }, i*1000
              );
  };
} 
else{
  document.write("nessuna corrispondenza");
}
