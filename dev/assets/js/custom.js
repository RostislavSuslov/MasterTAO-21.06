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

 
// checkButtons.forEach(item => {
//     item.closest('.col-lg-6').classList.add('padding-bottom')
// })

document.querySelectorAll('.check-button')[1].classList.add("this-is-legasy-code")
 






























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
});