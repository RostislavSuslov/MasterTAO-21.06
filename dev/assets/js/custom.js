$(document).ready(function() {
    $('.first-screen').slick({
        infinite: true,
        dots: true,
        appendArrows: '.first-screen-nav',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              }
            },
          ]
    });
    $('.first-screen').append($('.first-screen-nav'));


    mobileOnlySlider("#advanages-slider", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function() {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } // Mobile Only Slider


 
    // Выбираем все элементы с классом 'carousel-template' и для каждого из них выполняем следующую функцию
$('.carousel-template').each(function () {
    var slider = $(this); // Получаем текущий элемент с классом 'carousel-template' и сохраняем его в переменной slider
    
    // Инициализируем плагин Slick Carousel для текущего элемента
    slider.slick({
        infinite: true, // Бесконечная прокрутка карусели
        slidesToShow: 3, // Отображать 3 слайда одновременно
        slidesToScroll: 1, // Прокручивать по 1 слайду за раз
         responsive: [
            {
              breakpoint: 1346,
              settings: {
                slidesToShow: 2,
               }
            },
            {
                breakpoint: 955,
                settings: {
                  slidesToShow: 1,
                 }
            },
            {
                breakpoint:600,
                settings: {
                  slidesToShow: 1,
                  dots: true,
                  arrows: false,
                 }
            },
        ]
    });
});
});

const burger = document.querySelector('#hamburger');
burger.addEventListener('click', function() {
    burger.classList.toggle('is-active')
})

document.getElementById('fileInput').onchange = function () {
    //short name
    // document.getElementById('file-name').innerHTML = this.files[0].name;
    document.getElementById('file-name').innerHTML = this.value;
};

 
const checkButtons = document.querySelectorAll('.check-button');
console.log(checkButtons);

checkButtons.forEach((item, index) => {
  const colParent = item.closest('.col-lg-6');
   colParent ? colParent.classList.add('padding-bottom') : null;

   index === 5 ? item.classList.add("bg-warning") : null;
});

document.querySelectorAll('.check-button')[1].classList.add("this-is-legasy-code")
 

