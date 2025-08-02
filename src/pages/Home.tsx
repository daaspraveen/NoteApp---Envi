import Header from "../components/Header";
import Footer from "../components/Footer";
import NoteForm from "../components/NoteForm";
import DisplayNotes from "../components/DisplayNotes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const isLoggedIn = localStorage.getItem("noteAppLogin") === "true";
    const navigate = useNavigate();

    // localStorage.removeItem('noteAppData');
    const storedData = localStorage.getItem("noteAppData");
    const noteAppD = storedData ? JSON.parse(storedData) : [];

    const [noteAppData, setNoteAppData] = useState<any[]>(noteAppD);

    const updateNoteAppData = (newData: any[]) => {
        setNoteAppData(newData);
        localStorage.setItem("noteAppData", JSON.stringify(newData));
    }

    const doAdd = (title: string, description: string) => {
        // console.log("doAdd called", title, description);
        const newNote = {
            title,
            description,
            edit: false,
        };
        const updatedData = [...noteAppData, newNote];
        updateNoteAppData(updatedData);
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [])

    return (
        <>
            <Header />
            <main>
                <section className="hero-section p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold">Welcome to the Note App</h1>
                    <p className="mt-4">This is your home page where you can manage your notes.</p>
                </section>
                <section className="note-form-section mt-8">
                    <NoteForm addNoteFunc={doAdd} />
                </section>
                <hr className="text-gray-300 mt-5 max-w-[90vw] m-auto" />
                <section className="display-notes-section mt-8">
                    <DisplayNotes noteData={noteAppData} updateNoteAppData={updateNoteAppData} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;