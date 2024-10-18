import ArchiveIcon from "@mui/icons-material/Archive";
import BrushIcon from "@mui/icons-material/Brush";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PaletteIcon from "@mui/icons-material/Palette";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import React, { useEffect, useRef, useState } from "react";
import "./AddNote.css";

const AddNote = ({ updateList, openAddNote = false, noteDetails, action }) => {
  const [isExpanded, setIsExpanded] = useState(openAddNote);
  const [title, setTitle] = useState(noteDetails ? noteDetails.title : "");
  const [description, setDescription] = useState(
    noteDetails ? noteDetails.description : ""
  );
  const containerRef = useRef(null);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTitle("");
    setDescription("");
  };

  const handleAddNote = () => {
    if (title.trim() !== "" || description.trim() !== "") {
      const newNote = { title, description };
      // addNoteToLocalStorage(newNote); // Save to local storage
      console.log(updateList);
      updateList(newNote, action, noteDetails);

      handleClose();
    }
  };

  // const addNoteToLocalStorage = (note) => {
  //     const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  //     savedNotes.push(note);
  //     localStorage.setItem('notes', JSON.stringify(savedNotes));
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // loadNotesFromLocalStorage(); // Load notes when component mounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {!isExpanded && (
        <div className="collapsed-note" onClick={handleInputClick}>
          <input
            type="text"
            placeholder="Take a note..."
            className="collapsed-input"
          />
          <div className="collapsed-icons">
            <CheckBoxIcon className="icon" />
            <BrushIcon className="icon" />
            <ImageIcon className="icon" />
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="expanded-note">
          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Take a note..."
            className="note-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="note-footer">
            <div className="icons">
              <NotificationsNoneIcon className="icon" />
              <PersonAddIcon className="icon" />
              <PaletteIcon className="icon" />
              <ImageIcon className="icon" />
              <ArchiveIcon className="icon" />
              <MoreVertIcon className="icon" />
              <UndoIcon className="icon" />
              <RedoIcon className="icon" />
            </div>
            <button className="close-btn" onClick={handleAddNote}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
