let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log('sum ', sum);
//same thing, just reverse way
let sum2 = 0;
for (let i = 5; i >= 1; i--) {
    sum2 = sum2 + i
}
console.log('sum2', sum2);
//same thing, just with fucntion
function sum3(i) {
    console.log(i);
    if (i == 1) {
        return 1;
    }
    return i + sum3(--i);
}

console.log(sum3(5))
//i + sum3(--i)
//5 + sum3(4)
//5 + 4 + sum(3)
//5 + 4 + 3 + sum(2)
//5 + 4 + 3 + 2 + sum(1)
//5 + 4 + 3 + 2 + 1;
//15