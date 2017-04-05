var TwirlDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("twirl");
};

TwirlDancer.prototype = Object.create(Dancer.prototype);
TwirlDancer.prototype.constructor = TwirlDancer;

TwirlDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};  