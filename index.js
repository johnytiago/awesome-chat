'use strict';
const Hapi = require('hapi');
const routes = require('./server/routes');
const Inert = require('inert');
const Vision = require('vision');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// TODO: connect socket io

server.register([Inert, Vision], (err) => {
    if (err) {
        throw err;
    }

    server.views({
      engines: {
        html: require('handlebars')
      },
      relativeTo: __dirname,
      path: './templates',
      layoutPath: './templates/layout',
      partialsPath: './templates',
      layout: 'default'
    });

    server.route(routes);

    server.start((err) => {
      if (err) {
        throw err;
      }
      console.log(`Server running at: ${server.info.uri}`);
    });
});
