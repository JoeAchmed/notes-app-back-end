const {
  addNoteHandler, getAllNotes, getNoteByID, editNoteByIdHandler,
} = require('../handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    options: {
      cors: {
        origin: ['*'],
      },
    },
    handler: getAllNotes,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByID,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];

module.exports = routes;
