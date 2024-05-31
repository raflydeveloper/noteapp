import "../style/style.css";
import { addNoteForm } from "./noteForm.js";
import NoteApi from "../data/remote/note-app.js";
import { showLoading, hideLoading } from "./loading.js";

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector("main");
  const wrapper = document.createElement("div");

  wrapper.classList.add("wrapper");
  mainElement.appendChild(wrapper);
  wrapper.appendChild(addNoteForm);

  const listNotes = document.createElement("notes-list");
  wrapper.appendChild(listNotes);

  async function renderNotes() {
    showLoading();
    try {
      const getNotes = await NoteApi.getNote();
      const allNotes = [...getNotes];
      listNotes.render(allNotes);
    } catch (error) {
      console.log("fail add note", error);
    } finally {
      setTimeout(() => {
        hideLoading();
      }, 2000);
    }
  }

  renderNotes();

  addNoteForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const judulCatatan = this.querySelector("#Judul").value;
    const isiCatatan = this.querySelector("#Isi").value;
    if (judulCatatan && isiCatatan) {
      showLoading;
      try {
        await NoteApi.createNote(judulCatatan, isiCatatan);
        renderNotes();
        this.reset();
      } catch (error) {
        console.error("fail add note", error);
        alert("fail add note");
      } finally {
        setTimeout(() => {
          hideLoading();
        }, 2000);
      }
    } else {
      alert("Judul dan isi catatan Wajib di isi!!");
    }
  });

  const inputTitle = document.getElementById("Judul");
  const inputBody = document.getElementById("Isi");
  const addButton = document.getElementById("Tambah_Catatan");
  const titleError = document.getElementById("titleError");
  const bodyError = document.getElementById("bodyError");

  function validateTitle() {
    if (inputTitle.value.trim() === "") {
      titleError.textContent = "Judul wajib diisi!!";
      inputTitle.classList.add("invalid");
      return false;
    } else {
      titleError.textContent = "";
      inputTitle.classList.remove("invalid");
      return true;
    }
  }

  function validateBody() {
    if (inputBody.value.trim() === "") {
      bodyError.textContent = "Catatan wajib diisi!!";
      inputBody.classList.add("invalid");
      return false;
    } else {
      bodyError.textContent = "";
      inputBody.classList.remove("invalid");
      return true;
    }
  }

  if (inputTitle) inputTitle.addEventListener("input", validateTitle);
  if (inputBody) inputBody.addEventListener("input", validateBody);
  if (addButton) {
    addButton.addEventListener("click", function (event) {
      const TitleValidate = validateTitle();
      const BodyValidate = validateBody();

      if (TitleValidate && BodyValidate) {
        alert("Catatan Berhasil ditambahkan");
      } else {
        event.preventDefault();
      }
    });
  }
});
