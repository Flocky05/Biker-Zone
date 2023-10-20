import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="bg-purple-300 grid grid-cols-1 justify-items-center p-10">
        <h2 className="text-3xl p-12 text-black hover:text-white">Please <span className="text-white hover:text-black">Register</span> </h2>
        <form action="">
            <div className="grid grid-cols-2 gap-6">
                <div className="mt-3">
                    <h2 className="text-lg"> frist Name</h2>
                    <input type="text" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder=" frist Name"/>
                </div>
                <div className="mt-3">
                    <h2 className="text-lg"> Last Name</h2>
                    <input type="text" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder=" Last Name"/>
                </div>
            </div>
            <h2 className="text-lg">Enter your Mail</h2>
            <input type="mail" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder="Enter your mail"/>
            <h2 className="text-lg"> Mobile Number</h2>
            <input type="number" className="p-2 border-2 w-full bg-blue-gray-50 rounded-md" placeholder="Enter your Mobile Number"/>
            <h2 className="text-lg">Enter your password</h2>
            <input type="password" className="p-2 w-full border-2 bg-blue-gray-50 rounded-md" placeholder="Enter your password"/>
            <button className="bg-green-600 px-7 py-2 text-white rounded-md mt-3">Submit</button>
            <p className="mt-3">Already have an <Link to="/login" className="text-white">Accout</Link>? </p>
        </form>
    </div>
    );
};

export default Register;