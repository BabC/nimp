var arrosages = require('./arrosage');
var recoltes = require('./recolte');
var items = require('./item');
var plants = require('./plant');
var cases = require('./case');

cases.getPlantAtXY(1, 1, function (err, plant) {
    console.log(plant);
    arrosages.insert(Date(), plant, function (err, arrosage) {
        console.log(arrosage);
    });

    recoltes.insert(Date(), plant, 150, function (err, recolte) {
        console.log(recolte);
    })
});