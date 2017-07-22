/*
 * Arrosage
 * 
 * date: Date
 * plant: Plant
 * 
 */
var plant = require('./plant');
var Datastore = require('nedb'),
    db = new Datastore({
        filename: './arrosagedb.chill',
        autoload: true
    });


module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(err, docs);
        });
    },

    getByDate: function (date, callback) {
        db.find({
            date: date
        }, function (err, arrosages) {
            callback(err, arrosages);
        });
    },
    getByPlant: function (plant, callback) {
        db.find({
            plant: plant
        }, function (err, arrosages) {
            callback(err, arrosages);
        });
    },

    insert: function (date, plant, callback) {
        db.insert({
            date: date,
            plant: plant._id,
        }, function (err, newArrosage) {
            callback(err, newArrosage);
        });
    }
};