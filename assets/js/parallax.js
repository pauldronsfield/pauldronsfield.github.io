
$(window).scroll(function() {

	let winScroll = $(this).scrollTop()
	const headerContainer = $('.header-container')
	const header = headerContainer.find('.header')
	const headerHeight = headerContainer.height()
	const headerMenuCtrl = $('.header__menu-icon')
	const headerLink = $('.header__link')

	if(winScroll > headerHeight) {
		header.addClass('header--fixed')
		headerMenuCtrl.addClass('u-txt--darkknight')
		headerLink.addClass('u-txt--darkknight')
	} else {
		header.removeClass('header--fixed')
		headerMenuCtrl.removeClass('u-txt--darkknight')
		headerLink.removeClass('u-txt--darkknight')
	}



	// $('.hero__slide').css({
	// 	'transform' : 'translate(0px, ' + winScroll / -10 + '%)'
	// })

})