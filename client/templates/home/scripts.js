Template.splash.onRendered(function () {
	new WOW().init();

	$(".tt-fullHeight").height($(window).height());

	$(window).resize(function(){
	    $(".tt-fullHeight").height($(window).height());
	});
});

Template.navigation.onRendered(function(){
	$('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        });
});

Template.facts.onRendered(function () {
	$(window).stellar();
	$('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });
});