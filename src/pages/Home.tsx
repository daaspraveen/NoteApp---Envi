import Header from "../components/Header";
import Footer from "../components/Footer";
import NoteForm from "../components/NoteForm";
import DisplayNotes from "../components/DisplayNotes";

// localStorage.removeItem('noteAppData');

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="hero-section p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold">Welcome to the Note App</h1>
                    <p className="mt-4">This is your home page where you can manage your notes.</p>
                </section>
                <section className="note-form-section mt-8">
                    <NoteForm />
                </section>
                <hr className="text-gray-300 mt-5 max-w-[90vw] m-auto" />
                <section className="display-notes-section mt-8">
                    <DisplayNotes />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;