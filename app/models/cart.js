const fs = require('fs')
const path = require('path')
const pathDir = require('../util/path')
const p = path.join(pathDir, 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(s => s.id == id);
            const existingProduct = cart.products[existingProductIndex]

            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct }
                updatedProduct.qty++;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice += +productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => err && console.log(err))
        })
    }

    static deleteById(id, productPrice){
        fs.readFile(p, (err, fileContent) =>{
            if (err) {
                return;
            }

            const updatedCart = { ... JSON.parse(fileContent)}
            console.log('updatedCart', updatedCart);
            console.log('id', id);
            const product = updatedCart.products.find(s => s.id == id);
            console.log('product', product);
            const productQty = product.qty;
            console.log('productQty', productQty);
            updatedCart.totalPrice = updatedCart.totalPrice - (productQty * productPrice);
            console.log('updatedCart.totalPrice', updatedCart.totalPrice);
            updatedCart.products = updatedCart.products.filter(s=> s.id != id);
            console.log('updatedCart.products', updatedCart.products);

            fs.writeFile(p, JSON.stringify(updatedCart), err => err && console.log(err))
        });
    }
}