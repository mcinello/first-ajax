document.addEventListener("DOMContentLoaded", function() {

  var buttonOne = document.querySelector('#step12 > button');
  buttonOne.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {page: 'empty'},
      dataType: 'text'
    })
  });

  var buttonTwo = document.querySelector('#step3456 > button')
  var sectionTwo = document.querySelector('#step3456');
  buttonTwo.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    })
      .done(function(responseData) {
      var pTag = document.createElement('p');
      pTag.innerText = responseData;
      sectionTwo.append(pTag)
      console.log("p tag should be there");
    })
    .fail(function(){
      var pTag = document.createElement('p');
      pTag.innerText = "Sorry about that! I'll do better next time :3";
      sectionTwo.append(pTag)
      console.log("should get a 500 error");
  })
    .always(function() {
      console.log("Hey, the request finished!");
    });
  });

  var buttonThree = document.querySelector('#step7 > button');
  var sectionThree = document.getElementById('step7');
  buttonThree.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    })
    .done(function(responseData) {
      var pTag = document.createElement('p');
      pTag.innerText = responseData;
      sectionThree.append(pTag);
    });
  });

  var buttonFour = document.querySelector('#step8 > button');
  var sectionFour = document.querySelector('#step8')
  buttonFour.addEventListener('click', function(e) {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Pacific/Honolulu'},
      dataType: 'text'
    })
    .done(function(responseData) {
      var pTag = document.createElement('p');
      pTag.innerText = responseData;
      sectionFour.append(pTag);
    });
  });

  var buttonFive = document.querySelector('#step9 > button');
  // var sectionFive = document.querySelector('#step9');
  var list = document.querySelector('#car-list');
  buttonFive.addEventListener('click', function(e){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    })
    .done(function(responseData) {
      list.innerHTML = responseData;
    });
  });

});
