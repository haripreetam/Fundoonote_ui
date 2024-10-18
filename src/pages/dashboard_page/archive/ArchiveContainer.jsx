import React, { useEffect, useState } from "react";
import { fetchArchivedNotes } from "../../../Services/Api";
import NoteCard from "../notes/NoteCard";

const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await fetchArchivedNotes();
        // console.log(data);
        setArchivedNotes(data);
      } catch (error) {
        console.error("Error fetching archived notes:", error.message);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div style={styles.container}>
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note, index) => (
          <NoteCard key={index} noteDetails={note} useFor="archive" />
        ))
      ) : (
        <span>No archived notes found</span>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
};

export default Archive;
