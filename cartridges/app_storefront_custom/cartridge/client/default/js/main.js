window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});





//$('.promo-code-form').css('visibility', 'hidden');

$('.handle-coupon').on('click', function (e) {
    $('.handle-coupon').hide();
    $('.promo-code-form').css('display','block');
})


// $('.promo-code-form').on('click', function (e) {
//     e.preventDefault();
//     $('.promo-code-form').toggle();
// });



