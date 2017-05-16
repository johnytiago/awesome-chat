'use strict';
const Hapi = require('hapi');

server.connection({ 
  port: 3000, 
  host: 'localhost' 
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

// TODO
// Start hello world server
// Add route
// Add views
// (register plugins)
