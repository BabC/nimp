// app/models/article.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var caseSchema = mongoose.Schema({
	x     : Number,
	y     : Number,
	plant      : {type: mongoose.Schema.Types.ObjectId, ref: 'Plant'}
});

// create the model for articles and expose it to our app
module.exports = mongoose.model('Case', caseSchema);

