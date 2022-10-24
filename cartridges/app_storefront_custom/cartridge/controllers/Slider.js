'use strict';

var server = require('server');

server.get('Render', function (req, res, next) {
    
    res.render("carousel/carousel");
    return next();
});

module.exports = server.exports();
