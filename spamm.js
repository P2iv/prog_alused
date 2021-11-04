//kirja suuruse küsimine
let kirja_suurus = prompt("Sisestage kirja suurus:")
let kirja_pealkiri = prompt ("Sisestage kirja pealkiri:")
let fail = prompt("Kas kirjaga on kaasas fail?")
if (kirja_pealkiri !== "") {
if (kirja_suurus > 1 ) {
if (fail == "jah") {
    console.log("See on spämm")
} else {
    console.log("See ei ole spämm")
}

} else {
    console.log("See ei ole spämm")
}

} else {
    console.log("See ei ole spämm")
}