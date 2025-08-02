import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
            <p>&copy; 2023 NoteApp. All rights reserved by <Link to="https://praveend.netlify.app">PraveenDas</Link></p>
        </footer>
    );
}

export default Footer;
