window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

<<<<<<< Updated upstream
=======
$.ajax({
    url: urlContent,
    type: 'get',
    dataType: 'html',
    success: function (response) {
        $('.modal-body').html(response);
        $('').modal('show');
    }
});

var htmlString = '<!-- Modal -->'
        + '<div class="modal show" id="consent-tracking" aria-modal="true" role="dialog" style="display: block;">'
        + '<div class="modal-dialog">'
        + '<!-- Modal content-->'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + textHeader
        + '</div>'
        + '<div class="modal-body"></div>'
        + '<div class="modal-footer">'
        + '<div class="button-wrapper">'
        + '<button class="affirm btn btn-primary" data-url="' + urlAccept + '" autofocus data-dismiss="modal">'
        + textYes
        + '</button>'
        + '<button class="decline btn btn-primary" data-url="' + urlReject + '" data-dismiss="modal" >'
        + textNo
        + '</button>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    $.spinner().start();
    $('body').append(htmlString);
>>>>>>> Stashed changes
