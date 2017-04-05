var TwirlDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwirlDancer.prototype = Object.create(Dancer.prototype);
TwirlDancer.prototype.constructor = TwirlDancer;

TwirlDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass("twirl");
  this.$node.toggle(); //change this to a CSS animation
};  