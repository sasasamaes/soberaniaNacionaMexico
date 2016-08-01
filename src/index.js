require('babel-polyfill');
var page = require('page');

require('./header');
require('./footer');
//require('./homepage');
page();
$(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.modal-trigger').leanModal();
});
