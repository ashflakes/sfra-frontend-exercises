window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

$("#comment").keyup(function () {
    var charLength = $(this).val().length;
    var charLimit = $(this).attr("size");

    var charLeft = charLimit - charLength
    $("#remaining-chars").html("You have " +  charLeft + " characters left out of " + charLimit + "." );
})