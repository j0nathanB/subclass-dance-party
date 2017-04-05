$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() / 1.75 * Math.random(),
      $("body").width() /1.1 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });
});