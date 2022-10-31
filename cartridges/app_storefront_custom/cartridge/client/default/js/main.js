window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

function getFilterModal() {

    var htmlString = '<!-- Modal -->'
        + '<div class="modal fade" id="filter-modal" role="dialog">'
        + '<!-- Modal content-->'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + '    <a class="full-pdp-link" href=""></a>'
        + '    <button type="button" class="close pull-right" data-dismiss="modal">'
        + '        <span aria-hidden="true">&times;</span>'
        + '        <span class="sr-only"> </span>'
        + '    </button>'
        + '</div>'
        + '<div id="modal-body"></div>'
        + '</div>'
        + '</div>'
        + '</div>';
        $('body').append(htmlString);
}

$(getFilterModal());

$(".ajax-filter").on("click", function () {
    $('#filter-modal').on('show.bs.modal', function () {
        var inputToPrint = $("#sample-text")
        $('#modal-body').append(inputToPrint);
    })
});
