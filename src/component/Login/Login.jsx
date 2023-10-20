

const Login = () => {
    return (
        <div className="bg-purple-400 grid grid-cols-1 justify-items-center p-20">
            <form action="">
                <h2>Enter your Mail</h2>
                <input type="mail" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder="Enter your mail"/>
                <h2>Enter your password</h2>
                <input type="password" className="p-2 w-full border-2 bg-blue-gray-50 rounded-md" placeholder="Enter your password"/>
            </form>
        </div>
    );
};

export default Login;