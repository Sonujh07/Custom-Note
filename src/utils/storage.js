// Key used to store and retrieve notes from localStorage
export const STORAGE_KEY = 'sonuKumar';

// Function to fetch notes from localStorage
export const getNotes = () => {
  try {
    // Attempt to parse the notes from localStorage; default to an empty array if null
    const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return notes;
  } catch (error) {
    
    throw new Error('Failed to load notes');
  }
};

// Function to save a new note to localStorage
export const saveNote = (note) => {
  try {
    // First, retrieve the current list of notes
    const notes = getNotes();

    // Prepend the new note to the list and save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify([note, ...notes]));
  } catch (error) {
    
    throw new Error('Failed to save note');
  }
};
