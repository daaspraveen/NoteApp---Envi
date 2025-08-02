import { useState } from "react";
import NoteCard from "./NoteCard";

type DisplayNotesProps = {
    noteData: any[];
    updateNoteAppData: (newData: any[]) => void;
}

const DisplayNotes = ({ noteData, updateNoteAppData }: DisplayNotesProps) => {
    const [notesDisplayed, setNotesDisplayed] = useState(false);
    // console.log("noteData = ", noteData);

    const doEdit = (index: number, title: string, description: string) => {
        // console.log("doEdit called", title, description);
        const updatedData = noteData.map((note, ind) => {
            if (ind === index) {
                return { title, description, edit: !note.edit };
            }
            return note;
        });
        updateNoteAppData(updatedData);
    }

    const doDelete = (title: string, description: string) => {
        // console.log("doDelete called", title, description);
        const updatedData = noteData.filter(note => !(note.title === title && note.description === description));
        updateNoteAppData(updatedData);
    }

    return (
        <div className="flex justify-center flex-col min-h-[50vh] items-center">
            <button type="button"
                onClick={() => setNotesDisplayed(!notesDisplayed)}
                className="bg-blue-400 hover:bg-blue-500 px-4 rounded-md text-white transition-all duration-100 cursor-pointer py-2 hover:px-3">
                {notesDisplayed ? 'Hide' : 'Display'} Notes</button>

            <ul className="mt-4 w-full max-w-[650px] flex flex-wrap justify-center gap-2">
                {notesDisplayed && noteData.length > 0 ? (
                    noteData?.map((note: any, index: number) => (
                        <NoteCard note={note} onEdit={doEdit} onDelete={doDelete} key={index} index={index} />
                    ))
                ) : notesDisplayed ? (
                    <li className="text-center text-gray-500">No notes available.Add Note</li>
                ) : null}
            </ul>
        </div>
    )
}

export default DisplayNotes;