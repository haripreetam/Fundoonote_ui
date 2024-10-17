import React, { useEffect, useState } from 'react';

const Trash = () => {
  const [trashNotes, setTrashNotes] = useState([]);

  useEffect(() => {
    // Load trash notes from localStorage when the component mounts
    const storedTrashNotes = JSON.parse(localStorage.getItem('trash')) || [];
    setTrashNotes(storedTrashNotes);
  }, []);

  return (
    <div style={styles.container}>
      {trashNotes.length === 0 ? (
        <div>No notes in trash.</div>
      ) : (
        <div style={styles.noteList}>
          {trashNotes.map((note) => (
            <div key={note.id} style={styles.noteCard}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
  },
  noteList: {
    width: '100%',
    maxWidth: '600px',
  },
  noteCard: {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default Trash;
