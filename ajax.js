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
  var sectionTwo = document.querySelector('#step3456');
  buttonTwo.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {page: 'ping'},
      dataType: 'text'
    })
    // .done(function(responseData) {
    //   var pTag = document.createElement('p');
    //   pTag.innerText = responseData;
    //   sectionTwo.append(pTag)
    // })
  //   .fail(function(){
  //     var pTag = document.createElement('p');
  //     pTag.innerText = "Sorry about that! I'll do better next time :3";
  //     sectionTwo.append(pTag)
  // });
    .always(function() {
      console.log("Hey, the request finished!");
    });
  });

});
