import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-purple-300 grid grid-cols-1 justify-items-center p-20">
            <h2 className="text-3xl p-12 text-black hover:text-white">Please <span className="text-white hover:text-black">Login</span> </h2>
            <form action="">
                <h2 className="text-lg">Enter your Mail</h2>
                <input type="mail" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder="Enter your mail"/>
                <h2 className="text-lg">Enter your password</h2>
                <input type="password" className="p-2 w-full border-2 bg-blue-gray-50 rounded-md" placeholder="Enter your password"/>
                <p className="mt-3">Do not have <Link to="/register" className="text-white">Accout</Link>? </p>
            </form>
        </div>
    );
};

export default Login;