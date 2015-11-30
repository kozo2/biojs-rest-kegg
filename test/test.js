var KeggClient = require('../');

require('mocha')
var assert = require("chai").assert;

describe('keggclient rest', function(){
	this.timeout(5000);
	
	it("Exists", function(){
		assert.isDefined(KeggClient);
	})
	
	describe('data ret', function () {
		var delay = 50;
		var org = "eco";
		it("ret eco path from kegg", function(done){
			KeggClient.listPathway(org, function(data){
				console.log(data);
				setTimeout(done, delay);
			});
		});
	});
});