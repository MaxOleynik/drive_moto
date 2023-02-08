$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        // Замена стандартных стрелок 

        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprew"><img src="images/icons/arrow-left.svg" alt="left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt="right"></button>'
        
        // Замена стандартных стрелок 
    });

    // табы, переключение
    $('.search__tabs-item').on('click', function(e){
        e.preventDefault();

        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');

        
    }); 
    // табы, переключение
});