const productsDetails = [
    { name: 'iphone 14', price: 80000 },
    { name: 'samsung galaxy s22', price: 85000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo ega laptop', price: 56000 },
    { name: 'asus dfe3 laptop', price: 45000 },
    { name: 'smart watch samsung', price: 14000 },
    { name: 'apple watch', price: 46000 },
    { name: 'oneplus 9', price: 66500 },
];
function searchProducts(products, searchText) {
    const serachResult = []
    for (const product of products) {
        if (product.name.includes(searchText)) {
            serachResult.push(product);
        }
    }
    return serachResult;
}
const matched = searchProducts(productsDetails, 'watch');
console.log('Your seached products --', matched)