
import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
    return (
        <div>
            <h3 className="font-bold">Login With</h3>
            <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightAside;