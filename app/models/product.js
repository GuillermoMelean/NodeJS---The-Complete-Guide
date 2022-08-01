const fs = require('fs')
const path = require('path')
const pathDir = require('../util/path')

const Cart = require('./cart');
const p = path.join(pathDir, 'data', 'products.json')

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) return cb([])
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
            if (this.id) {
                console.log('entrou no true');
                const existingProductIndex = products.findIndex(s => s.id == this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(p, JSON.stringify(updatedProducts), err => err && console.log("ERRO", err));
            } else {
                console.log('entrou no false');

                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => err && console.log("ERRO", err));
            }
        })
    }

    static fetchAll(cb) {
        return getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(s => s.id == id);
            if (product) return cb(product)
            return cb(null)
        })
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(s => s.id === id)
            const updatedProducts = products.filter(s => s.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteById(id, product.price);
                }
            });
        })
    }
}