import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-100 p-2 mt-5">
            <button className="btn btn-error text-white rounded-none">Latest</button>
            <Marquee className="space-x-10" pauseOnHover={true} speed={200}>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;