'use script'

var server = require('server');

server.get('Render', (req, res, next) => {
    res.render("exerciseThirteen/renderMe");

    return next();
})

// server.get('ShowModal', function (req, res, next) {
//     var URLUtils = require('dw/web/URLUtils');
//     var Resource = require('dw/web/Resource');

//     var params = req.querystring;

//     res.setViewData();

//     this.on('route:BeforeComplete', function (req, res) { // eslint-disable-line no-shadow
//         var viewData = res.getViewData();
//         var renderedTemplate = renderTemplateHelper.getRenderedHtml(viewData, viewData.template);

//         res.json({
//             renderedTemplate: renderedTemplate,
//             productUrl: URLUtils.url('Product-Show', 'pid', viewData.product.id).relative().toString()
//         });
//     });

//     next();
// });


module.exports = server.exports();


