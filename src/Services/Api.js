import axios from "axios";
const API_BASE_URL = "http://127.0.0.1:8000/";
const token = localStorage.getItem("access");

//Register api

//login api call
export const loginApiCall = async (payload) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/users/login/",
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error, "no response");
  }
};

// add note api
export const addNoteApi = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}notes/`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// fetching all notes
export const fetchAllNotes = async () => {
  const response = await axios.get(`${API_BASE_URL}notes/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const toogleArchiveStatus = async (noteId) => {
  console.log(token);
  const response = await axios.put(
    `${API_BASE_URL}notes/${noteId}/is_archive/`,
    "",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
