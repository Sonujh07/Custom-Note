import { useState } from 'react';
import { saveNote } from '../utils/storage';

const AddNote = ({ onAdd }) => {
  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Loading state to show feedback while saving
  const [loading, setLoading] = useState(false);

  // Error state to show error messages if save fails
  const [error, setError] = useState('');

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);   // Set loading to true when submitting
    setError('');       // Clear previous errors

    try {
      // Create a new note object
      const note = { title, content, createdAt: Date.now() };

      // Save the note to localStorage
      saveNote(note); // Why I chose useState + this submit handler: to manage form input reactively and trigger updates.

      // Trigger re-render in parent component (e.g., refresh the list)
      onAdd();

      // Reset form fields after successful save
      setTitle('');
      setContent('');
    } catch (err) {
      // Set error message for display
      setError(err.message);
    } finally {
      // Turn off loading spinner
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-amber-50 rounded-2xl w-[50%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Note</h2>

      {/* Display error message if present */}
      {error && (
        <div className="bg-red-100 text-red-600 p-2 mb-2">
          {error} {/* Why display error banner: gives user feedback on issues like save failure */}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Controlled input for title
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Controlled input for content
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit button that shows loading state */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Saving…' : 'Add Note'} {/* Why show spinner here: gives user visual feedback during save */}
        </button>
      </form>
    </div>
  );
};

export default AddNote;
