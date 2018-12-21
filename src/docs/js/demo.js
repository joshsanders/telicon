$(document).ready(function() {

  // instantiate search filter
  $(function() {
      $('.input--search').fastLiveFilter('.icons-list');
  });

  // instantiate clipboard
  var clipboard = new Clipboard('.icon-container');

  clipboard.on('success', function(e) {

    toastr["success"]("Icon name copied to clipboard", toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "slideUp"
    });
  });
  clipboard.on('error', function(e) {
      // console.log(e);

    toastr["error"]("Something went wrong...try copying again", toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "slideUp"
    });
  });

  // main section pinned to top on scroll to maintain search visibility
  // $(window).scroll(function() {
  //   var scrollTop = $(window).scrollTop();
  //   var sectionHeaderHeight = $('.section-header').height();

  //   if(scrollTop > 154) {
  //     $('.icons .section-header').addClass('js-is-fixed');

  //     // $('.icons-list').css('marginTop', sectionHeaderHeight);
  //       $('.icons-list').addClass('js-fixed--mt-adjust');
  //   }
  //   else {
  //     $('.icons .section-header').removeClass('js-is-fixed');
  //      $('.icons-list').removeClass('js-fixed--mt-adjust');
  //   }
  // });

});