/*
 * PLANT
 * 
 * item: Item
 * 
 */
var items = require('./item');
var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'plantdb.chill',
        autoload: true
    });

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(docs);
        });
    },

    insert: function (item, callback) {
        console.log(item._id);
        db.insert({
            item: item[0]._id
        }, function (err, docs) {
            callback(docs);
        });
    }
};