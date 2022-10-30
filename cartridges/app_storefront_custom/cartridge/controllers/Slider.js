'use strict';

var server = require('server');

server.get('RenderProductSlider', function(req, res, next) {
    var sliderURLs = {
        slickbasicURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css",
        slickthemeURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css",
        jqueryslickURL: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js",
        slickURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
    }

    res.render("slider/tenProductSlider", {
        sliderURLs
    });
    return next();
})

module.exports = server.exports();
