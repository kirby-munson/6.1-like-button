var Backbone = require('backbone');
var $ = require('jquery');



var LikeButton = Backbone.Model.extend({
  defaults: {
    'name': 'button',
    'start': 0
  },
  initialize: function(){
    console.log('LikeButton was created');
  },
  countUp: function(){
    var count = this.get('start') + 1;
    this.set('start', count);
    return count;
  }
  // refresh: function(){
  //   var number = this.get('start') + 1;
  //   this.set('start', number);
  //   $('.btn').on('click', function(event){
  //     event.preventDefault();
  //     $('.btn').html(number + ' ' + 'like');
  //   });
  // }
});

module.exports = {
  'LikeButton': LikeButton
};
