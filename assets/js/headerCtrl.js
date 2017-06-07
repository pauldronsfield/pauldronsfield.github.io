const headerMenuIcon = $('.header__menu-icon')
const headerNav = $('.header__nav')

$(document).ready(function() {
	headerMenuIcon.on('click', function() {
		headerNav.toggleClass('header__nav--open')
	})
})




