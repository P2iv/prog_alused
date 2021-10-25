var punkt = window.prompt("Ainepunktide arv: ");
var week = window.prompt( "Nädalate arv: ");

let ekp = (punkt*26);
let vastus = Math.round(ekp/week)

alert("Sinu ajakulu on " + vastus + " tundi nädalas.")
console.log(vastus)