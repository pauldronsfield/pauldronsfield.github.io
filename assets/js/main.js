var Header = (function() {
    const icon = $('.header__menu-icon');
    const nav = $('.header__nav');

    return {
        menuCtrl: function() {
            icon.on('click', function() {
                nav.toggleClass('header__nav--open')
            });
        }
    };
})();

$(document).ready(function() {

    Header.menuCtrl();

});

$(window).scroll(function() {

    var winScroll = $(this).scrollTop();
    var headerContainer = $('.header-container');
    var header = headerContainer.find('.header');
    var headerHeight = headerContainer.height();
    var headerMenuCtrl = $('.header__menu-icon');
    var headerLink = $('.header__link');

    if(winScroll > headerHeight) {
        header.addClass('header--fixed');
        headerMenuCtrl.addClass('u-txt--darkknight');
        headerLink.addClass('u-txt--darkknight');
    } else {
        header.removeClass('header--fixed');
        headerMenuCtrl.removeClass('u-txt--darkknight');
        headerLink.removeClass('u-txt--darkknight');
    }

});