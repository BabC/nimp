/*
 * ITEM
 * 
 * nom: String
 * img: String
 * conseils_arrosage: Number
 * 
 */
var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'itemdb.chill',
        autoload: true
    });

/*
var doc = {
    item: "bweSlNzukJJAQD6F"
};
db.insert(doc, function (err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

*/

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(docs);
        });
    },

    getByName: function (name, callback) {
        db.find({
            nom: name
        }, function (err, docs) {
            callback(docs);
        });
    },

    insert: function (name, img, conseils_arrosage, callback) {
        db.insert({
            nom: name,
            img: img,
            conseils_arrosage: conseils_arrosage
        }, function (err, docs) {
            callback(err);
        });
    }
};