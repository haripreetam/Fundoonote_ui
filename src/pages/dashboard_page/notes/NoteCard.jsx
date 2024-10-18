import ArchiveIcon from "@mui/icons-material/Archive";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaletteIcon from "@mui/icons-material/Palette";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { toogleArchiveStatus } from "../../../Services/Api";
import AddNote from "./AddNote";
import "./NoteCard.css";

const NoteCard = ({ noteDetails, updateList, useFor }) => {
  const [openEditNote, setOpenEditNote] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedNoteId, setSelectedNoteId] = React.useState(null);
  const open = Boolean(anchorEl);
  // same methods for all icons

  const handleNoteIconsClick = async (action, nodeId) => {
    //based on api call
    //and then perform that action
    if (action === "archive") {
      const response = await toogleArchiveStatus(nodeId);
      console.log(response);
      updateList(nodeId, "archive");
    } else {
    }
  };

  const handleMenuClick = (event, noteId) => {
    setAnchorEl(event.currentTarget);
    setSelectedNoteId(noteId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedNoteId(null);
  };

  return (
    <div className="note-card-container">
      <div className="note-card">
        {" "}
        {/* Add a key for each note */}
        <div className="note-content" onClick={() => setOpenEditNote(true)}>
          <div className="note-title">{noteDetails.title}</div>
          <div className="note-description">{noteDetails.description} </div>
        </div>
        <div className="note-icons">
          <NotificationsIcon className="icon" aria-label="Notifications" />
          <PersonAddIcon className="icon" aria-label="Add Person" />
          <PaletteIcon className="icon" aria-label="Palette" />
          <ImageIcon className="icon" aria-label="Image" />
          {/* <DownloadIcon
            className="icon"
            aria-label="Download"
            onClick={(event) => handleNoteIconsClick("archive", noteDetails.id)}
          /> */}
          <ArchiveIcon
            className="icon"
            aria-label="Download"
            onClick={(event) => handleNoteIconsClick("archive", noteDetails.id)}
          />
          <MoreVertIcon
            className="icon"
            aria-label="More Options"
            onClick={(event) => handleMenuClick(event, noteDetails.id)}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <Modal
        open={openEditNote}
        onClose={() => setOpenEditNote(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddNote
          updateList={updateList}
          openAddNote={true}
          noteDetails={noteDetails}
          action="update"
        />
      </Modal>
    </div>
  );
};

export default NoteCard;
