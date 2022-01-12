$(document).ready(function() {
    $('.showmenu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');

    });
});

$(function() {
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
    });
});

/*$(function() {
    $('.showmenu').click(function() {
        $('.header-list').slideToggle(200);
    });
});*/