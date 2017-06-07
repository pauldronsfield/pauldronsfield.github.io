const Heroslides = $('.hero__slides')
const HeroSlide = $('.hero__slide')

$(document).ready(function() {
	
	setInterval(function() {
		let activeHeroSlide = Heroslides.children('.active')
		activeHeroSlide.removeClass('active')
		activeHeroSlide.next().length ? activeHeroSlide.next().addClass('active') : Heroslides.children().first().addClass('active')
	}, 5000)

})