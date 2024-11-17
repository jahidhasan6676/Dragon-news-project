import { Link } from "react-router-dom";
import userImg from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center mt-6">
            <div>
                {user && user.name}
            </div>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
                <Link to="/dev">Dev Information</Link>
            </div>
            <div className="flex items-center gap-3">
                {
                    user ?
                        <div>
                            <img className="w-6 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>
                        :
                        <img src={userImg} alt="" />
                }

                {
                    user ? <button onClick={logOut} className="btn btn-neutral">LogOut</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                }

            </div>

        </div>
    );
};

export default Navbar;