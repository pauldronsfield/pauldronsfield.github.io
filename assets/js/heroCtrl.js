var Hero = (function() {
    const Heroslides = $('.hero__slides')
	return {
    	slideCtrl: function() {
            setInterval(function() {
                let activeHeroSlide = Heroslides.children('.active')
                activeHeroSlide.removeClass('active')
                activeHeroSlide.next().length ? activeHeroSlide.next().addClass('active') : Heroslides.children().first().addClass('active')
            }, 5000);
		}
	};
})();

$(document).ready(function() {

	Hero.slideCtrl();

});