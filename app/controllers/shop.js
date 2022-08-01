const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Products',
            path: "/product-list"
        })
    });
}

exports.getProduct = (req, res) => {
    const prodId = req.params.productId;

    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            pageTitle: 'Shop | ' + product.title,
            path: '/products',
            product: product
        })
    })
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

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(product.id, product.price); 
    })

    res.redirect('/')
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
} 