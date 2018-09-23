const $ = require('jquery');

$(document).ready(function() {
    if($('#append').length){
        if(document.documentElement.clientWidth < 992) {
            $('#two').detach().prependTo('#one');
        };
    };
});