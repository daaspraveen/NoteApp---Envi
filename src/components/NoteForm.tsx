import { useState } from "react";

const NoteForm = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [notedescription, setNotedescription] = useState("");

    const  doAddNote = (e: React.FormEvent) => {
        e.preventDefault();
        const storedData = localStorage.getItem("noteAppData");
        const noteAppData = storedData ? JSON.parse(storedData) : [];
        noteAppData.push({
            title: noteTitle,
            description: notedescription,
            edit: false,
        });
        localStorage.setItem("noteAppData", JSON.stringify(noteAppData));
        console.log(localStorage.getItem("noteAppData"));
    };

    return (
        <form onSubmit={e => doAddNote(e)} className="note-form p-4 bg-white shadow-md rounded max-w-[600px] m-auto">
            <h2 className="text-xl font-semibold mb-4">Create a Note</h2>
            <div className="mb-4">
                <label htmlFor="noteTitle" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="noteTitle"
                    required
                    placeholder="Enter Title"
                    value={noteTitle}
                    onChange={e => setNoteTitle(e.target.value)}
                    className="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    rows={4}
                    required
                    value={notedescription}
                    onChange={e => setNotedescription(e.target.value)}
                    placeholder="write description upto 200 characters" className="p-2 mt-1 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-gray-800 hover:bg-gray-950 px-4 rounded-md text-white transition-all duration-100 cursor-pointer py-2 hover:px-3">Save Note</button>
        </form>
    );
}

export default NoteForm;