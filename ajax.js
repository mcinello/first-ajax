document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button = document.querySelector('button');
  button.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {page: 'empty'},
      dataType: 'text'
    })
  });


});
