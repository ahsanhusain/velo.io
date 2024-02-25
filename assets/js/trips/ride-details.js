$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

$(document).ready(function(){
  $('.boxes').slick({
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, 
      {

        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }, 
      {

        breakpoint: 300,
        settings: "unslick" // destroys slick
      }
    ]
  });
});

function customNext(state = 1) {
    if (state == 1) {
       $('.boxes').slick('slickPrev');
    }else{
      $('.boxes').slick('slickNext');
    }
}