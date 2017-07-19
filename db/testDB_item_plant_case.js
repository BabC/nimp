var items = require('./item');
var plants = require('./plant');
var cases = require('./case');

/*items.getByName('banane', function (err, item) {
    plants.insert(item, function (err, newPlant) {
        cases.insert(1, 1, newPlant, function (err, newCase) {
            console.log(newCase);
        })
    })
})*/

cases.getPlantAtXY(1, 1, function (err, plant) {
    plants.getItemById(plant.plant, function (err, item) {
        items.getById(item.item, function (err, item) {
            console.log(item);
        });
    })
});