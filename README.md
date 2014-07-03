walmart-node-api
================

walmart-node-api node client for accessing walmart's rest api


Sample Usage
================
```javascript
var walmart = new WalmartClient();
walmart.init("vngtrxzq5m8n3svpetjvcgax"); //init with walmart api key

walmart.getTaxonomy(function(err, req, res, obj) {
    console.log(JSON.stringify(obj));
});

```
