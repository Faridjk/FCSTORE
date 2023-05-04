const carouselExample = document.querySelector('#carouselExample');
if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(carouselExample, {
        interval: false
    })
    var carouselWidth = $('.carousel-inner2')[0].scrollWidth;
    var cardWidth = $('.carousel-item2').width();
    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner2').animate({ scrollLeft: scrollPosition }, 600)
        }
    });
    $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner2').animate({ scrollLeft: scrollPosition }, 600)
        }
    })
} else {
    $(carouselExample).addClass('slide');
}
