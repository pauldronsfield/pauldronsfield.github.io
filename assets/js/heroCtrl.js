var hero = (function() {
    var heroslides = $('.hero__slides')
	return {
    	slideCtrl: function() {
            setInterval(function() {
                let activeHeroSlide = heroslides.children('.active')
                activeHeroSlide.removeClass('active')
                activeHeroSlide.next().length ? activeHeroSlide.next().addClass('active') : heroslides.children().first().addClass('active')
            }, 5000);
		}
	};
})();

$(document).ready(function() {

	hero.slideCtrl();

});