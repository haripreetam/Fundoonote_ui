import React, { useEffect, useState } from "react";
import { addNoteApi, fetchAllNotes } from "../../../Services/Api";
import AddNote from "./AddNote";
import NoteCard from "./NoteCard";

function NotesContainer() {
  const [noteslist, setNoteList] = useState([]);

  useEffect(() => {
    // const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    // const response = fetchAllNotes();
    // console.log(response.data);
    // setNoteList(savedNotes);
    async function fetchNotes() {
      try {
        const data = await fetchAllNotes();
        console.log(data.data);
        setNoteList(data.data.filter((note) => !note.is_archive));
      } catch (error) {
        console.error("Error fetching notes:", error.message);
      }
    }

    fetchNotes();
  }, []);

  async function handleUpdateList(data, action) {
    if (action === "add") {
      const response = await addNoteApi(data);
      //   console.log(response);
      setNoteList([response.data, ...noteslist]);
    } else if (action === "archive") {
      setNoteList(noteslist.filter((note) => note.id !== data));
    }
  }

  return (
    <>
      {/* Only one AddNote component */}
      <AddNote updateList={handleUpdateList} />
      {noteslist.map((note, index) => (
        <NoteCard
          useFor="note"
          key={index}
          noteDetails={note}
          updateList={handleUpdateList}
        />
      ))}
    </>
  );
}

export default NotesContainer;
