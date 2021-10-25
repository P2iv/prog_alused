var nimi = window.prompt("Teie nimi: ");
var num1 = window.prompt( "Lubatud kiirus: ");
var num2 = window.prompt("Tegelik kiirus");

let tulemus = (num2-num1)*3;
let vastus = Math.min( 190, tulemus);

alert(nimi + " ,teie trahv on " + vastus +" €.");
console.log(vastus);