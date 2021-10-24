var Product = require('../models/product');
var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('localhost:27017/shopping');


var products = [

    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 47
    }),
    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 44
    }),
    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 49
    }),
    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 45
    }),
    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 47
    }),
    new Product({
        imagePath: 'https://c4.wallpaperflare.com/wallpaper/886/585/214/michael-with-money-gta-v-wallpaper-preview.jpg',
        title: 'Gta 5',
        description: 'online multiplayer',
        price: 45
    })
];
var done = 0;
for(var i = 0; i < products.length; i++){
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
