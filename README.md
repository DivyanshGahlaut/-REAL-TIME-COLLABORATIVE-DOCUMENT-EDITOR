# React + Vite

"company": CODTECH IT SOLUTIONS

"NAME":DIVYANSH GAHLAUT

"INTERN ID" :CT04DG831

"DOMAIN" : Full Stack Web Development

"DURATION": 4 WEEKS

"MENTOR" : NEELA SANTOSH

*Project Description:

This is a real-time collaborative text editor built using React on the frontend and Node.js with Socket.IO on the backend. It allows multiple users to edit the same document simultaneously, with changes reflected live across all connected clients.


*Tools & Technologies Used:

1.Frontend (Client):
React.js – For building the user interface.

Quill.js – Rich text editor.

Socket.IO Client – For WebSocket communication with server.

Vite – Frontend build and development server.

2.Backend (Server):
Node.js – JavaScript runtime environment.

Express.js – Backend server framework.

Socket.IO Server – Handles real-time communication between clients.

*How It Works:
1. Startup
The frontend is served using Vite.

The backend is started using node server.js and listens on port 3001.

2. Connect Clients
When a user opens the editor, a WebSocket connection is established via Socket.IO to the backend.

3. Initialize Editor
Quill.js initializes a rich text editor.

Users can write text, apply formatting (bold, italic, underline, etc.).

4. Broadcast Changes
As a user types or makes changes, those changes are sent to the server.

The server then broadcasts these changes to all other connected clients.

5. Receive and Sync
Other clients receive the updates and apply them to their own Quill editor.

This keeps all users’ documents in real-time sync.

# Features:

Rich Text Editing (bold, italic, underline, lists, links, images, etc.)

Real-time collaboration

WebSocket communication using Socket.IO

Modular and scalable structure

* OUTPUT

![Image](https://github.com/user-attachments/assets/69f4422a-95a0-4753-9199-1c1984732aba)
