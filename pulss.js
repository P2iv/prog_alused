//kasutaja sisend
let vanus = prompt("Sisestage enda vanus:");
let sugu = prompt("Sisestage enda sugu (M või m) või (N või n):");
let treening = prompt("Valige sobiv treening (1,2 või 3):");
//tingimuslause
let maxPulsisagedus;
//sugu kontroll
if (sugu === "M" || sugu  === "M") {
    maxPulsisagedus = 220 - vanus
}
if (sugu === "N" || sugu  === "n") {
    maxPulsisagedus = 206 - vanus * 0.88;
}
//treeningu kontroll
let maxPuls;
let minPuls;
if (treening === 1) {
    minPuls = maxPulsisagedus * 0.5;
    maxPuls = maxPulsisagedus * 0.7;
} else if (treening === 2) {
    minPuls = maxPulsisagedus * 0.7;
    maxPuls = maxPulsisagedus * 0.8;
} else if (treening === 3) {
    minPuls = maxPulsisagedus * 0.8;
    maxPuls = maxPulsisagedus * 0.87;
}
console.log ("Pulsisagedus peaks olema vahemikus " + Math.trunc(Math.round(minPuls)) + " ja " + Math.trunc(Math.round(maxPuls)))
