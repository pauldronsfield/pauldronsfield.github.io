const footerSlides = $('.footer__slides')
const footerSlide = $('.footer__slide')

$(document).ready(function() {
	
	setInterval(function() {
		let activeFooterSlide = footerSlides.children('.active')
		activeFooterSlide.removeClass('active')
		activeFooterSlide.next().length ? activeFooterSlide.next().addClass('active') : footerSlides.children().first().addClass('active')
	}, 6000)

})