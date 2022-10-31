'use script'

var server = require('server');

server.get('Render', (req, res, next) => {
    res.render("exerciseThirteen/renderMe");

    return next();
})


