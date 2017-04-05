var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shy");
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.on('mouseover', function(){
            $(this).css({
                left:($("body").width() * Math.random())+"px",
                top:($("body").height() * Math.random())+"px",
            });
        });
};  