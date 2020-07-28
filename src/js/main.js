let updateTicketPosition = () => {
    if ($(window).width() >= 1580) {
        $('.ticket').css('left', $('.header .container').offset().left + $('.header .container').outerWidth() - $('.ticket').outerWidth());
    } else if ($(window).width() < 1580) {
        $('.ticket').css('right', 20).css('left', 'initial');
    }
}

let initMobileMenu = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header .container').prepend('<div class="hamburger"><span></span></div>');
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
    }
}

let updateButtonWidth = () => {
    if ($(window).width() > 767) {
        $('.items__header .btn').outerWidth($('.items .items__item').outerWidth())
    }
};

updateTicketPosition();
initMobileMenu();
updateButtonWidth();

$('input[name="phone"]').mask('+7 (000) 000-00-00');

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.menu').addClass('active');
});

$('body').on('click', '.close-menu', () => {
    $('.hamburger').toggleClass('active');
    $('.menu').removeClass('active');
});

$(window).on('resize', updateTicketPosition);
$(window).on('resize', initMobileMenu);
$(window).on('resize', updateButtonWidth);

$('.product__slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-second',
    swipe: false
});

$('.product__slider-second').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product__slider-main',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            vertical: false,
          }
        }
      ]
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.tab').removeClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});