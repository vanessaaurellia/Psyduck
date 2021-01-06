const express = require('express')
const path = require('path')

var web = express();
var port = process.env.PORT || 8081

web.set('view engine', 'ejs')
web.use(express.json());

web.use('/assets', express.static(path.join(__dirname, 'ASSET')));
web.use('/database', express.static(path.join(__dirname, 'DATABASE')));


web.get("/", function(req, res) {
    res.render('dashboard')
})

web.get("/dashboard", function(req, res) {
    res.render('dashboard')
})

web.get("/pelanggan", function(req, res) {
    res.render('pelanggan')
})

web.get("/pakaian", function(req, res) {
    res.render('pakaian')
})

web.get("/pesanan", function(req, res) {
    res.render('pesanan')
})  

web.get("/distributor", function(req, res) {
    res.render('distributor')
})

web.get("/stok", function(req, res) {
    res.render('stok')
})

web.get("/team", function(req, res) {
    res.render('team')
})

web.get("/index", function(req, res) {
    res.render('index')
})

web.get('/updatecust/:ID', function(req, res){
    res.render('updatecust', {id: req.params.ID})
})
    
web.get('/updateappa/:ID', function(req, res){
    res.render('updateappa', {id: req.params.ID})
})

web.get('/detail/:ID', function(req, res){
    res.render('detail', {id: req.params.ID})
})

web.listen(port, function() {
    console.log('Running');
})