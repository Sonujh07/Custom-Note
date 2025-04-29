    ****************Folder Structure****************
├── public/

├── src/

│   ├── components/

│   │   ├── AddNote.jsx

│   │   ├── NotesList.jsx

│   ├── utils/

│   │   └── storage.js

│   ├── App.jsx

│   ├── main.jsx

├── index.html

├── tailwind.config.js

├── postcss.config.js

├── package.json

**************Setup & Run**************

npm install

npm run dev

****Why Decisions****
localStorage + key naming:  Simple browser persistence without backend; key 'custom_notes' is scoped uniquely.

Component design:  Separated AddNote and NotesList for SRP (Single Responsibility Principle).

State management: useState for form state, useEffect for syncing localStorage.

Styling: Tailwind CSS for rapid, utility-first styling.

Navigation: Button toggle approach to avoid route setup and keep UI focused.

GitHub Repo: https://github.com/Sonujh07/Custom-Note.git

