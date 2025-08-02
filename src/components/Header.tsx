import { Link } from "react-router-dom";

const Header = () => {
    const isLoggedIn = localStorage.getItem("noteAppLogin") === "true";

    return (
        <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-2xl text-black">Note App</h1>
            <nav className="flex space-x-4">
                <ul className="flex space-x-4 p-0 m-0 list-none">
                    <li className="hover:underline hover:scale-105 transition-all duration-100">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline hover:scale-105 transition-all duration-100">
                        {isLoggedIn ? (
                            <Link to="/login">
                                <button type="button" onClick={() =>
                                    localStorage.removeItem("noteAppLogin")}>
                                    Logout
                                </button>
                            </Link>
                        ) : (
                            <Link to="/login">Login</Link>)}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;