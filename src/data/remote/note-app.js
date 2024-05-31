const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NoteApi {
  static async createNote(title, body) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      if (response.status !== 200) {
        throw new Error(`fail add note: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.log("fail add note", error);
    }
  }
  static async getNote() {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status !== 200) {
        throw new Error(`fail exhibit note: ${response.statusText}`);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log("fail exhibit note", error);
    }
  }
  static async deleteNote(idNotes) {
    try {
      const url = `${BASE_URL}/notes/${idNotes}`;
      const response = await fetch(url, { method: "DELETE" });
      if (response.status !== 200) {
        throw new Error(`fail delete note: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("fail delete note", error);
    }
  }
}
export default NoteApi;
