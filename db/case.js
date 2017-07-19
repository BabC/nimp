/*
 * CASE
 * 
 * x: Number
 * y: Number
 * plant: Plant
 * 
 */
var plant = require('./plant');
var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'casedb.chill',
        autoload: true
    });

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(docs);
        });
    },

    getPlantAtXY: function (x, y, callback) {
        db.find({
            x: x,
            y: y
        }, function (err, doc) {

        });
    },

    insert: function (x, y, plant, callback) {
        console.log(item._id);
        db.insert({
            x: x,
            y: y,
            plant: plant[0]._id
        }, function (err, docs) {
            callback(docs);
        });
    }
};