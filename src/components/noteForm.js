const addNoteForm = document.createElement("form");
addNoteForm.id = "Note-Form";
addNoteForm.innerHTML = `
<style>
  #Note-Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  
  .Input-Catatan {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:20px;
  }
  
  .Input-Catatan label {
    font-size: 20px;
    display: block;
    padding: 15px;
  }
  
  .Input-Catatan input[type="text"],
  .Input-Catatan textarea {
    width: 80%;
    padding: 20px;
    border-radius: 20px;
    font-size: 15px;
    padding-bottom: 30px;
  }
  
  #Tambah_Catatan {
    width: 10%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.5);
    background-color: #ca8787;
    margin-bottom: 20px;
    display: flex;
    margin:auto;
    font-weight:bold;
    color:#fff;
    justify-content:center;

  }
</style>

<form class="Note-Form" id="Note-Form">
  <div class="Input-Catatan">
    <label for="Judul"> Input Catatan</label>
    <input
      type="text"
      id="Judul"
      placeholder="Input Judul Here"
      required
      aria-describedby="titleError"
    />
    <div id="titleError" class="error-message"></div>
  </div>
  <div class="Input-Catatan">
    <label for="Isi">Input Isi Catatan</label>
    <textarea
      id="Isi"
      placeholder="Input isi Catatan Here"
      required
      aria-describedby="bodyError"
    ></textarea>
    <div id="bodyError" class="error-message"></div>
  </div>
  <button type="submit" id="Tambah_Catatan">Tambah</button>
</form>
`;

export { addNoteForm };
