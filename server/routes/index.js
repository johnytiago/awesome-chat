module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply.view("index", {messages});
    }
  },

  // TODO: Add route for style and js folder
]
