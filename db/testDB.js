var items = require('./item');
var plants = require('./plant');
var potagers = require('./potager');

//items.getAllItem();
//items.insert('tomate', '', 6, function (err) {});

/*items.getAll(function (docs) {
    console.log(docs);
})*/

/*
plants.getAll(function (docs) {
    console.log(docs);
})*/


potagers.insert("potager2", 1, 10, 2, 3, function(err, newElt){
    console.log(err);
    console.log(newElt);
});

potagers.getOneByNom("potager1", function(err, returnElt){
    console.log(returnElt);
    console.log(returnElt.largeur);
});