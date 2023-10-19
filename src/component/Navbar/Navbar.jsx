import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
        <div>
          <Link to="/" className="text-3xl font-bold">Biker Zone</Link>
        </div>
        <div className="grid grid-cols-6 gap-4 items-center text-xl">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/news">News</Link>
              <Link to="/">Contract</Link>
              <Link to="/" className="bg-orange-600 text-white px-6 py-2 rounded-lg">Login</Link>
              
        </div>
    </div>
  );
};

export default Navbar;