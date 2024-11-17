import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="mt-4 space-y-2">
                <div className="flex gap-3 justify-center items-center border-2 w-full  py-1 rounded-md hover:bg-gray-200">
                <FaGoogle className="text-xl" />
                    <Link className="font-medium">Login With Google</Link>
                </div>
                <div className="flex gap-3 justify-center items-center border-2 w-full  py-1 rounded-md hover:bg-gray-200">
                <FaGithub className="text-xl" />
                    <Link className="font-medium">Login With Github</Link>
                </div>
            </div>
    );
};

export default SocialLogin;