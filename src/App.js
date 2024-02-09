import AddNoteForm from "./features/note/AddNoteForm";
import NoteList from "./features/note/NoteList";


function App() {
  return (
    <main className="App">
        <NoteList />
        <AddNoteForm />
    </main>
  );
}

export default App;
