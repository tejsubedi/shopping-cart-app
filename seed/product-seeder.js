var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/shopping", { useNewUrlParser: true });
//mongoose.connect("loclhost:/shopping");

var products = [
    new Product({
    title: "Trainer :B",
    description:"Awesome trainer",
    price: 24
    }),
    new Product({
    title: "Trainer :C",
    description:"Awesome trainer",
    price: 24
    }),
    new Product({
    title: "Trainer :A",
    description:"Awesome trainer",
    price: 24
})
];

var done = 0;
for (var i=0; i <products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
