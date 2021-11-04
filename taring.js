//kasutaja sisend
let num = prompt( "Mitu täringut on vaja?")
for (var i = 1; i <= num; i++) {
    let täring = Math.floor(Math.random() * 6) +1
    console.log(täring)
}