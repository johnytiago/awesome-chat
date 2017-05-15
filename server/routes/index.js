var messages = require('../messages.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply.view("index", {messages});
    }
  },
  {
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: 'public/js/'
      }
    }
  },
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: 'public/css/'
      }
    }
  }
]
