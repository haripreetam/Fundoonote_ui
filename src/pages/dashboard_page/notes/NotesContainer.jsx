import React, { useEffect, useState } from "react";
import {
  addNoteApi,
  fetchAllNotes,
  updateNoteApi,
} from "../../../Services/Api";
import AddNote from "./AddNote";
import NoteCard from "./NoteCard";

function NotesContainer() {
  const [noteslist, setNoteList] = useState([]);

  // for displaying the notes in notescontainer
  useEffect(() => {
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

  // for handling all the actions
  async function handleUpdateList(data, action, noteId = null) {
    if (action === "add") {
      const response = await addNoteApi(data);
      //   console.log(response);
      setNoteList([response.data, ...noteslist]);
    } else if (action === "archive") {
      setNoteList(noteslist.filter((note) => note.id !== data));
    } else if (action === "update") {
      // setNoteList([]);
      // console.log(data.noteDetails.id);
      const response = await updateNoteApi(noteId.id, data);
      // console.log(response);

      // map pass by value
      setNoteList(
        noteslist.map((note) =>
          note.id === response.data.id ? response.data : note
        )
      );
    }
  }

  return (
    <>
      {/* Only one AddNote component */}
      <AddNote updateList={handleUpdateList} action="add" />
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
