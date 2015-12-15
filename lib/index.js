var nets = require('nets');
var KeggClient = {};

KeggClient.listPathway = function(org, callback) {
	var options = {
		url: 'http://rest.kegg.jp/list/pathway/' + org
	};
	nets(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			callback(body);
		} else {
			throw error;
		}
	});
};

KeggClient.listGene = function(org, callback) {
	var options = {
		url: 'http://rest.kegg.jp/list/' + org
	};
	nets(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			callback(body);
		} else {
			throw error;
		}
	});
};

KeggClient.conv = function(target_db, source_db, callback) {
	var options = {
		url: 'http://rest.kegg.jp/conv/' + target_db + '/' + source_db
	};
	nets(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			callback(body.toString())
		} else {
			throw error;
		}
	});
};

// KeggClient.get = function(dbentries, callback) {

// }

module.exports = KeggClient;
// KeggClient.listPathway("eco");
// KeggClient.conv("eco", "ncbi-geneid");
