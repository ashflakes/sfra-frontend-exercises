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


$(document).ready(function () {
    getFilterModal();
    $('#filter-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var title = button.data('myHtml')
    var modal = $(this)

    modal.find('#modal-body').val(title);
    })
});


// function fillFilterModal() {
//     $("#modal-body").empty();
//     $("#modal-body").append("TEST");
// }


// $(".ajax-filter").on("click", function(){
//     var inputTxt = $("#sample-text").val());
//     // getFilterModal();
//     // $('#filter-modal').on('show.bs.modal', function(e) {
//     //     //var getString = $("#sample-text").val();
//     //     $("#modal-body").append('Test');
//     // });
// });


// function fillFilterModal() {
//     $('.modal-body').spinner().start();
//     $.ajax({
//         method: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             var stringToPrint = $(".filter-input").val();

//             $('#filter-modal .modal-body').empty();
//             $('.modal-body').html('dasdsadad');
//             $('#filter-modal').modal('show');
//             $('body').trigger('#filter-modal:ready');
//             $.spinner().stop();
//         },
//         error: function () {
//             $.spinner().stop();
//         }
//     });
// }




// $.ajax({
//     url: urlContent,
//     type: 'get',
//     dataType: 'html',
//     success: function (response) {
//         $('.modal-body').html(response);
//         $('').modal('show');
//     }
// });

// var htmlString = '<!-- Modal -->'
//         + '<div class="modal show" id="consent-tracking" aria-modal="true" role="dialog" style="display: block;">'
//         + '<div class="modal-dialog">'
//         + '<!-- Modal content-->'
//         + '<div class="modal-content">'
//         + '<div class="modal-header">'
//         + textHeader
//         + '</div>'
//         + '<div class="modal-body"></div>'
//         + '<div class="modal-footer">'
//         + '<div class="button-wrapper">'
//         + '<button class="affirm btn btn-primary" data-url="' + urlAccept + '" autofocus data-dismiss="modal">'
//         + textYes
//         + '</button>'
//         + '<button class="decline btn btn-primary" data-url="' + urlReject + '" data-dismiss="modal" >'
//         + textNo
//         + '</button>'
//         + '</div>'
//         + '</div>'
//         + '</div>'
//         + '</div>'
//         + '</div>';
//     $.spinner().start();
//     $('body').append(htmlString);
