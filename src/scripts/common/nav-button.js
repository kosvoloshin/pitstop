const $ = require('jquery');

$(document).ready(function() {
    if($('.nav').length){
      $("document").ready(function($){       

        $('#mat1').on('click', function(event) {
            $('#mat1').addClass('active');
            $('.form-table--one').addClass('visible');
            $('#work').removeClass('active');
            $('.form-table--two').removeClass('visible');
        });

        $('#work').on('click', function(event) {
            $('#work').addClass('active');
            $('.form-table--two').addClass('visible');
            $('#mat1').removeClass('active');
            $('.form-table--one').removeClass('visible');
        });

        $('#mat2').on('click', function(event) {
            $('#mat2').addClass('active');
            $('.form-table__left').addClass('visible');
            $('#price').removeClass('active');
            $('.form-table__right').removeClass('visible');
        });
        $('#price').on('click', function(event) {
            $('#price').addClass('active');
            $('.form-table__right').addClass('visible');
            $('#mat2').removeClass('active');
            $('.form-table__left').removeClass('visible');
        });

      });
    }
});