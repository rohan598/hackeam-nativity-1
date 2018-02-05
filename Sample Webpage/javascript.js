$(document).on('scroll', function () {
    $('.navbar').css('background-color', `rgba(0, 0, 0, ${$(document).scrollTop() / 1000})`);
});
