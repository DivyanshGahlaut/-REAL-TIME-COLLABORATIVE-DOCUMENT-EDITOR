import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image'],
  ['clean']
];

const App = () => {
  const wrapperRef = useRef();
  const socketRef = useRef();
  const quillRef = useRef();

  useEffect(() => {
    const socket = io('http://localhost:3001');
    socketRef.current = socket;

    const editor = document.createElement('div');
    wrapperRef.current.append(editor);
    const quill = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS }
    });
    quill.disable();
    quillRef.current = quill;

    socket.once('load-document', (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit('get-document', 'doc-id-123');

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source !== 'user') return;
      socket.emit('send-changes', delta);
    });

    socket.on('receive-changes', (delta) => {
      quill.updateContents(delta);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
};

export default App;