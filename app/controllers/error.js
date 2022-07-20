exports.get404 = (req, res) => { 
    res.render('error/404', { pageTitle: 'Page Not Found', path : '' })
}