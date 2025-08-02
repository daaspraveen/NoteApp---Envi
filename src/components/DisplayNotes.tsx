import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const DisplayNotes = () => {
    const [notesDisplayed, setNotesDisplayed] = useState(false);
    const [noteAppData, setNoteAppData] = useState<any[]>([]);

    const updateNoteAppData = (newData: any[]) => {
        setNoteAppData(newData);
        localStorage.setItem("noteAppData", JSON.stringify(newData));
    }

    const doEdit = (title:string, description:string) => {
        const updatedData = noteAppData.map(note => {
            if (note.title === title && note.description === description) {
                return { ...note, edit: !note.edit };
            }
            return note;
        });
        updateNoteAppData(updatedData);
        localStorage.setItem("noteAppData", JSON.stringify(updatedData));
    }
    const doDelete = (title:string, description:string) => {
        const updatedData = noteAppData.filter(note => !(note.title === title && note.description === description));
        setNoteAppData(updatedData);
        updateNoteAppData(updatedData);
        localStorage.setItem("noteAppData", JSON.stringify(updatedData));
    }

    useEffect(() => {
        const storedData = localStorage.getItem("noteAppData");
        setNoteAppData(storedData ? JSON.parse(storedData) : []);
    }, []);

    return (
        <div className="flex justify-center flex-col min-h-[50vh] items-center">
            <button type="button"
                onClick={() => setNotesDisplayed(!notesDisplayed)}
                className="bg-blue-400 hover:bg-blue-500 px-4 rounded-md text-white transition-all duration-100 cursor-pointer py-2 hover:px-3">
                {notesDisplayed ? 'Hide' : 'Display'} Notes</button>

            <ul className="mt-4 w-full max-w-[650px] flex flex-wrap justify-center gap-2">
                {notesDisplayed && noteAppData.length > 0 ? (
                    noteAppData?.map((note: any, index: number) => (
                        <NoteCard note={note} onEdit={doEdit} onDelete={doDelete} key={index} />
                    ))
                ) : notesDisplayed ? (
                    <li className="text-center text-gray-500">No notes available.Add Note</li>
                ) : null}
            </ul>
        </div>
    )
}

export default DisplayNotes;