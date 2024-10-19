import { useState, useEffect } from "react";

function Notes({ userId }) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const API_LINK = import.meta.env.VITE_API_LINK;

  // Fetch notes for the selected user
  async function fetchNotes() {
    const response = await fetch(`${API_LINK}/notes?userId=${userId}`);
    const data = await response.json();
    setNotes(data);
  }

  // Add a new note
  async function addNote() {
    await fetch(`${API_LINK}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, title, description }),
    });
    setTitle("");
    setDescription("");
    fetchNotes(); // Refresh notes after adding
  }

  // Delete a note
  async function deleteNote(noteId) {
    await fetch(`${API_LINK}/notes/${noteId}`, { method: "DELETE" });
    fetchNotes(); // Refresh notes after deleting
  }

  useEffect(() => {
    fetchNotes();
  }, [userId]);

  return (
    <div className="notes-section">
      <h2>Notes for User</h2>

      {/* Note Creation Form */}
      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {/* Display Notes */}
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note._id} className="note-item">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
