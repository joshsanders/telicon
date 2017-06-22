$(document).ready(function() {
    // instantiate search filter
    $(function() {
        $('.input--search').fastLiveFilter('.icons');
    });

    // instantiate clipboard
    var clipboard = new Clipboard('.icon-container');

    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
});