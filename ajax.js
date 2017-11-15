document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var buttonOne = document.querySelector('button');
  buttonOne.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {page: 'empty'},
      dataType: 'text'
    })
  });

  var buttonTwo = document.querySelector('#step3456 > button')
  buttonTwo.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {page: 'ping'},
      dataType: 'text'
    })
    .done(function(responseData) {
      var sectionTwo = document.querySelector('#step3456');
      var pTag = document.createElement('p');
      pTag.innerText = responseData;
      sectionTwo.append(pTag)
    })
  });

});
