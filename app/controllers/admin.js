const Product = require('../models/product') 

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
} 

exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product'
    })
}

exports.postEditProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
} 

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            prods: products,
            pageTitle: 'Admin Product List',
            path: "/admin/product-list"
        })
    });
}