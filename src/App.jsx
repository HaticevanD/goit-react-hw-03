import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const STORAGE_KEY = "phonebook_contacts";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const nameExist = contacts.some(
      (c) =>
        c.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );
    if (nameExist) {
      alert("This contact already exists!");
      return;
    }

    const newId =
      Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    setContacts((prev) => [...prev, { ...newContact, id: newId }]);
  };

  const deleteContact = (idToDelete) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== idToDelete));
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      {contacts.length > 0 && <SearchBox value={filter} onChange={setFilter} />}

      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
