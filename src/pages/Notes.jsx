import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/NotesList';
import Search from '../components/Search';
// import NotesHeader from '../components/NotesHeader';
import "../css/Notes.css"
import Logo from "../components/Logo";
import char4 from "../assets/char4.svg"

export function Notes() {
  const [notes, setNotes] = useState([
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div>
      <Logo />
      <img src={char4} alt="char4" style={{ position: "absolute", bottom: 720, left: 780 }} />
      <main className='notes'>
        <div className={`${darkMode && 'dark-mode'}`}>
          <div className='container'>
            {/* <NotesHeader handleToggleDarkMode={setDarkMode} /> */}
            <Search handleSearchNote={setSearchText} />
            <NotesList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchText)
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

