import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-black text-2xl mb-3">404 - Page Not Found</h2>
            <Link to="/" className="bg-gray-800 hover:bg-gray-950 transition-all duration-100 py-2 px-4 hover:px-3 rounded-sm hover:rounded-2xl text-white">Go to Home</Link>
        </div>
    );
}

export default NotFound;