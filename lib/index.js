var restify = require('restify');
var assert = require('assert');

var restClient = restify.createJsonClient({
    url: 'http://api.walmartlabs.com/'
});

var WalmartClient = function WalmartClient() {
    this.api_key = "vngtrxzq5m8n3svpetjvcgax"; //default 
};

WalmartClient.prototype.getTaxonomy = function getTaxonomy(callback) {
    restClient.get('/v1/taxonomy?apiKey=' + this.api_key, callback);
};
WalmartClient.prototype.init = function getTaxonomy(api_key) {
    this.api_key = api_key;
};

module.exports = WalmartClient;