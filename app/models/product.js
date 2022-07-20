const fs = require('fs')
const path = require('path')
const pathDir = require('../util/path')

const p = path.join(pathDir, 'data', 'products.json')

const getProductsFromFile = (cb) => { 
    fs.readFile(p, (err, fileContent) => {
        if (err) return cb([])
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() { 
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => err && console.log(err));
        })
    }

    static fetchAll(cb) {
        return getProductsFromFile(cb);
    }
}