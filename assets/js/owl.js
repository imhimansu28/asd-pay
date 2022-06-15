$('.one').owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    autoplay: false,
    autoplayTimeout:1500,
    animateOut: 'fadeIn',
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.two').owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout:1500,
    animateOut: 'fadeIn',
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.three').owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout:1500,
    animateOut: 'fadeIn',
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 6
        },
        1000: {
            items: 8
        }
    }
})