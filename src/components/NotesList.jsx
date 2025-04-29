import { useEffect, useState } from 'react';
import { getNotes } from '../utils/storage'; // Function to fetch notes from localStorage

// Helper function to format timestamps into readable date/time
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString(); // e.g., "4/29/2025, 3:45:12 PM"
};

const NotesList = () => {
  // State to hold the list of notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Why useEffect to sync storage → state: ensures notes load once on mount
    setNotes(getNotes());
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Your Notes
      </h2>

      {/* Show a message if no notes exist */}
      {notes.length === 0 ? (
        <p className="text-center text-white text-2xl">
          No notes yet. Create one to get started!
        </p>
      ) : (
        // Display notes in a responsive grid
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Note title with truncation for overflow */}
                <h3 className="text-xl font-bold text-blue-600 mb-2 truncate">
                  {note.title}
                </h3>

                {/* Note content preview limited to 3 lines and 100 characters max */}
                <p className="line-clamp-3 text-gray-700 text-sm mb-4 break-words">
                  {note.content.length > 100
                    ? note.content.slice(0, 100) + `...`
                    : note.content}
                </p>
              </div>

              {/* Footer showing the created timestamp */}
              <div className="mt-auto text-xs text-right text-gray-500">
                🕒 {formatDate(note.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
