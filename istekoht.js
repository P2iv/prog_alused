//kasutaja sisend
let valik = prompt("Kas soovite valida istekoha ise või loosiga:");
//tingimuslause
//valikukontroll
if (valik === "ise") {
    // ise valiti
    console.log ("Valisite ise")
    let koht = prompt("Kas soovid akna ääres või muu koha peal")
    if(koht === "aken"){
        console.log("Aknakoht")
    } else {
        console.log("Muu koht")
    }
}
else {
    //loos
    console.log("Istekoht loositi")
    let toenaosus = Math.trunc(Math.ceil(Math.random()*3))
    if(toenaosus === 1) {
        console.log("Aknakoht")
    } else {
        console.log("Muu koht")
    }
}
