//factorial example; 5 er factorial mane ki? 4 er factorail mane 1 thekhe 4 porjonto shogkhagulo multply korte thaka; like amon -- 4*3*2*1 ;
let factorail = 1;
for (let i = 4; i >= 1; i--) {
    factorail = factorail * i;
}
console.log('factorial -- ', factorail)
//same thing; just with function
function factorial2(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial2(--n);
}
console.log('factorial2 is --', factorial2(4))


