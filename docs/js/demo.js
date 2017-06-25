$(document).ready(function() {
  // instantiate search filter
  $(function() {
      $('.input--search').fastLiveFilter('.icons-list');
  });

  // instantiate clipboard
  var clipboard = new Clipboard('.icon-container');

  clipboard.on('success', function(e) {
    // console.info('Action:', e.action);
    // console.info('Words:', e.text);
    // console.info('Trigger:', e.trigger);

    // e.clearSelection();

    toastr["success"]("Class name copied to clipboard", toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "slideUp"
    });
      
  });
  clipboard.on('error', function(e) {
      console.log(e);
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