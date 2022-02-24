//print 1 to 5 numbers
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

//operer moto loop use na kore, function use korei loop er moto kaj kora jay. eibabe function er bitor function ke call korake recursion bole;
function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i)
    consoleNumber(i + 1)
}
consoleNumber(1)
