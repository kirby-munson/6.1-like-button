
var Backbone = require('backbone');
var models = require('./models/likes');
var $ = require('jquery');


var likes = new models.LikeButton();


$('.btn').on('click', function(){
  $('.btn').html(likes.countUp() + ' ' + 'Likes');
})
