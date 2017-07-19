/*
 * PLANT
 * nom : string
 * largeur : int
 * longueur : int
 * nb_case_y : int
 * nb-case_x : int
 * cases[][] : case|case
 * 
 */
var cases = require('./case');

var Datastore = require('nedb'),
	db = new Datastore({
		filename: './potagerdb.chill',
		autoload: true
	});

// appels à la bdd
module.exports = {
	getAll: function (callback) {
		db.find({}, function (err, docs) {
			callback(docs);
		});
	},

	insert: function (nom, largeur, longueur, nbCaseY, nbCaseX, callback) {
		var tabCases = [];
		tabCases.length = nbCaseX;
		for(var i = 0; i<nbCaseX; i++){
			tabCases[i] = [];
			tabCases[i].length = nbCaseY;
		}
		db.insert({
			nom: nom,
			largeur: largeur,
			longueur: longueur,
			nb_case_y: nbCaseY,
			nb_case_x: nbCaseX,
			cases : tabCases
			// création de tableau vide de dimension x y,
		}, function (err, newPotager) {
			callback(err, newPotager);
		});
	},

	getOneByNom: function (nom, callback) {
		db.find({
			nom: nom
		}, function (err, element) {
			callback(err, element[0]);
		});
	}


};