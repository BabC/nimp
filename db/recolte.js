/*
 * RECOLTE  
 * 
 * date: Date
 * plant: Plant
 * poids: Number
 * 
 */
var plant = require('./plant');
var Datastore = require('nedb'),
    db = new Datastore({
        filename: './recoltedb.chill',
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
        }, function (err, recoltes) {
            callback(err, recoltes);
        });
    },
    getByPlant: function (plant, callback) {
        db.find({
            plant: plant
        }, function (err, recoltes) {
            callback(err, recoltes);
        });
    },

    insert: function (date, plant, poids, callback) {
        db.insert({
            date: date,
            plant: plant._id,
            poids: poids
        }, function (err, newRecolte) {
            callback(err, newRecolte);
        });
    }
};