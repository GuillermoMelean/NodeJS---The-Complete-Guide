const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/products');
}

exports.getEditProduct = (req, res) => {
    const prodId = req.params.productId;
    if (!prodId) res.redirect('/');

    Product.findById(prodId, product => {
        if (!product) res.redirect('/');
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: true,
            product: product
        })
    });
}

exports.postEditProduct = (req, res) => {
    const { productId, title, description, price, imageUrl } = req.body;
    const updatedProduct = new Product(productId, title, imageUrl, description, price);
    console.log('updatedProduct', updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products');
}

exports.postDeleteProduct = (req, res) => {
    const { productId } = req.body;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Product List',
            path: "/admin/products"
        })
    });
}