import { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";


type Note = { title: string; description: string; edit: boolean };
type NoteCardProps = {
    note: Note;
    index: number;
    onDelete: (index: number) => void;
    onEdit: (index: number, newTitle: string, newDescription: string) => void;
};


const NoteCard = ({ note, index, onDelete, onEdit }: NoteCardProps) => {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);

    return (
        <li className="bg-white flex-grow shadow-md rounded-lg p-4 mb-4 max-w-[300px]">
            {note.edit ? (
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="border-2 p-1 border-gray-200 rounded-sm" />)
                : (<h3 className="text-lg font-semibold">{title}</h3>)}
            {note.edit ? (
                <input type="text" value={description} className="border-2 p-1 border-gray-200 rounded-sm" onChange={e => setDescription(e.target.value)} />)
                : (<p className="text-lg font-semibold">{description}</p>)}
            <div className="flex justify-between mt-1 gap-3 p-2">
                <button
                    onClick={() => {
                        if (note.edit) {
                            onEdit(index, title, description);
                        } else {
                            onEdit(index, title, description); // This will toggle edit mode in parent
                        }
                    }}
                    className="mt-2 text-sm text-blue-500 cursor-pointer hover:text-blue-700 flex items-center"
                >
                    {note.edit ? 'Done' : (<><MdEdit className="mr-1" /> Edit</>)}
                </button>
                <button
                    onClick={() => onDelete(index)}
                    className="mt-2 text-sm text-red-500 cursor-pointer hover:text-red-700 flex items-center"
                >
                    <MdDeleteOutline className="mr-1" />
                    Delete
                </button>
            </div>
        </li>
    );
}

export default NoteCard;
