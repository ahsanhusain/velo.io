$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const _id = parseInt(urlParams.get('id')) || 0; 
  console.log({_id});
  if (_id < 1) {
    $('.isEdit').text('Add Daily Context');
    $('.for_new').css('display', 'block');
  }
})