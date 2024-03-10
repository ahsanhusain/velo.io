$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

// $(document).ready(function() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const _id = parseInt(urlParams.get('id')) || 0; 
//   console.log({_id});
//   if (_id < 1) {
//     $('.isEdit').text('Add Daily Commute');
//     $('.for_new').css('display', 'block');
//   }
// })

$(document).ready(function() {
    $('.booking-pref').click(function() {
      $('.booking-pref').removeClass('active'); // Remove 'active' class from all buttons
      $(this).addClass('active'); // Add 'active' class to the clicked button
    });

    $('.with').click(function() {
      $('.with').removeClass('active'); // Remove 'active' class from all buttons
      $(this).addClass('active'); // Add 'active' class to the clicked button
    });

    $('.perf').click(function() {
      $('.perf').removeClass('active'); // Remove 'active' class from all buttons
      $(this).addClass('active'); // Add 'active' class to the clicked button
    });

    $(".air-condition, .winter, .pets").click(function(){
      $(this).toggleClass("active");
    });
  });