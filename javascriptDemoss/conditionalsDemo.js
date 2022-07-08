var sayi1 =39
var sayi2 =35
var sayi3 =34

//En büyük sayıyı bulunuz

// if(sayi1>sayi2 & sayi1>sayi3){
//     console.log("En büyük ",sayi1)
// }
// else if(sayi2>sayi3 & sayi2>sayi1){
//     console.log("En büyük ",sayi2)
// }
// else{
//     console.log("En büyük ="+sayi3)
// }

var enBuyuk =sayi1
if(enBuyuk<sayi2){
    enBuyuk = sayi2
}
if(enBuyuk<sayi3){
    enBuyuk = sayi3
}
console.log("Bu sayıların içinde en Büyük olan = "+ enBuyuk)
