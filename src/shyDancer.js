var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shy");

  this.$node.on('mouseover', function(){
    
    var tempX = $("body").width() * Math.random();
    var tempY = $("body").height() * Math.random();

    $(this).css({
      left:tempX+"px",
      top:tempY+"px",
    });

  });
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};  