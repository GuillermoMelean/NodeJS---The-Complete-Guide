const Product = require('../models/product')

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Products',
            path: "/product-list"
        })
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: "/"
        })
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: "/cart"
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle: 'Checkout'
    })
} 

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path:'/orders',
        pageTitle: 'Your Orders'
    })
} 