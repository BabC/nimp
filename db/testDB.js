var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'datafile',
        autoload: true
    });


db.find({

}, function (err, docs) {
    docs.forEach(function (entry) {
        console.log(entry);
    });
});