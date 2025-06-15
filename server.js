const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const Document = require('./Document');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

mongoose.connect('mongodb://localhost:27017/collab-editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit('load-document', document.data);

    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit('receive-changes', delta);
    });

    socket.on('save-document', async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

const findOrCreateDocument = async (id) => {
  if (!id) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: '' });
};

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});