'use strict';

var request = require('request').defaults({encoding: 'utf8'});

class KeggClient {
  constructor() {
    this.baseurl = 'http://rest.kegg.jp/';
  }
  
  listPathways() {
    request(this.baseurl + 'list/pathway', function(error, response, body){
      if(!error && response.statusCode == 200) {
        console.log(body)
      }
    })
  }
  
}

let k = new KeggClient();
k.listPathways();
