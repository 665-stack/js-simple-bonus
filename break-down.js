const productsDetails = [
    { name: 'iphone 14', price: 105000 },
    { name: 'samsung galaxy s22', price: 140000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo ega laptop', price: 56000 },
    { name: 'asus dfe3 laptop', price: 45000 },
    { name: 'smart watch samsung', price: 27000 },
    { name: 'apple watch', price: 46000 },
    { name: 'watch band', price: 4000 },
    { name: 'oneplus 9', price: 66500 },
];
for (const product of productsDetails) {
    if (product.price < 5000) {
        break;//akhane break use korar fole 4000 er nicher product tar por ar porer product ta nibei na. But akhane jodi continue use kori taile 4000 price er product ta skip kore porer product e chole jabe;
    }
    console.log(product)
}
console.log('after the loop')