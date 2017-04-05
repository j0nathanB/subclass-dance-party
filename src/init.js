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

  var getDistance = function(point1, point2){
    var xDiff = point2.left - point1.left;
    var yDiff = point2.top - point1.top 

    return Math.sqrt( Math.pow(xDiff,2) + Math.pow(yDiff,2));
  }
});