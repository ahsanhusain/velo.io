$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

$('.booking-pref').click(function() {
  $('.booking-pref').removeClass('active'); // Remove 'active' class from all buttons
  $(this).addClass('active'); // Add 'active' class to the clicked button
});

$(".air-condition, .winter, .pets").click(function(){
  $(this).toggleClass("active");
});