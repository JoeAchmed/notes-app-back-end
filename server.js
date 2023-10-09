// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const router = require('./routes');

const host = 'localhost';
const port = 5000;

const Init = async () => {
  const server = Hapi.server({ port, host });
  server.route(router);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

Init();
