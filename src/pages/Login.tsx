import { useEffect, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // localStorage.removeItem("noteAppLogin");
    const isLoggedIn = localStorage.getItem("noteAppLogin");
    console.log("isLoggedIn", isLoggedIn);
    const navigate = useNavigate();

    const [username, setUsername] = useState("praveendas");
    const [password, setPassword] = useState("note123");
    const [showPassword, setShowPassword] = useState(false);

    const doLogin = (e: any) => {
        e.preventDefault();
        console.log("Login function called");
        localStorage.setItem("noteAppLogin", "true");
        navigate('/');
    };

    useEffect(() => {
        if (isLoggedIn === "true") {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <section className="login-page flex flex-col items-center min-h-screen justify-center bg-gray-100 p-8">
                <div className="login-box bg-white shadow-md rounded-lg p-6 mb-6 shadow-gray-300">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <p className="mt-4 text-[12px]">Please enter your credentials to log in.</p>
                    <hr className="text-gray-300 mt-2" />
                    <form className="mt-6" onSubmit={e => doLogin(e)}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <span className="mt-1 w-full flex justify-center align-middle border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" >
                                <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)}
                                    className="p-2 w-fit" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer p-2 flex items-center justify-center">
                                    {showPassword ? (
                                        <LuEye className="place-content-center" />
                                    ) : (
                                        <LuEyeClosed className="place-content-center" />
                                    )}
                                </button>
                            </span>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-200">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;