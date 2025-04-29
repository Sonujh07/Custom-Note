import { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  const [view, setView] = useState('add');

  const refresh = () => setView('view');

  return (
    <div className="min-h-screen bg-gray-500 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Custom Notes</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setView('add')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                view === 'add'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              Add Note
            </button>
            <button
              onClick={() => setView('view')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                view === 'view'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              View Notes
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {view === 'add' ? <AddNote onAdd={ () => {}} /> : <NotesList />}
        </div>
      </main>
    </div>
  );
}

export default App;
