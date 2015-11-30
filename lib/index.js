var nets = require('nets');
var KeggClient = {};

KeggClient.listPathway = function(org, callback) {
  var options = {
	url: 'http://rest.kegg.jp/list/pathway/' + org,
	encoding: undefined
  };
  nets(options, function(error, response, body) {
	if (!error && response.statusCode === 200) {
	  callback(body);
	} else {
	  throw error;
	}
  });
};

module.exports = KeggClient;
