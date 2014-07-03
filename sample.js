var WalmartClient = require('./index');

var walmart = new WalmartClient();
walmart.init("vngtrxzq5m8n3svpetjvcgax"); //init with walmart api key



walmart.getTaxonomy(function(err, req, res, obj) {
    console.log(JSON.stringify(obj));
});