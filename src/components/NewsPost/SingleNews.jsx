import { FaEye } from "react-icons/fa"; // Eye Icon for views
import { AiFillStar } from "react-icons/ai"; // Star Icon for rating
import { BiShareAlt } from "react-icons/bi"; // Share Icon
import { Link } from "react-router-dom";

const SingleNews = ({news}) => {

    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
      } = news;
    
    // console.log(news)
    return (
        <div className="card bg-white  rounded-md p-4 border space-y-4 py mt-5">
        {/* Author Section */}
        <div className="flex items-center space-x-3">
          <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
          <BiShareAlt className="ml-auto cursor-pointer text-gray-600" />
        </div>
  
        {/* Title Section */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
  
        {/* Thumbnail Section */}
        <div className="relative">
          <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-[380px] rounded-lg object-cover" />
          <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg">
            {total_view}
          </span>
        </div>
  
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{details}</p>
        <Link to={`/news/${news._id}`} className="text-red-400 text-xs underline">Read More</Link>
  
        {/* Rating and Views Section */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center text-yellow-500">
            <AiFillStar />
            <span className="ml-1 text-gray-800">{rating.number} ({rating.badge})</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye />
            <span className="ml-1">{total_view}</span>
          </div>
        </div>
      </div>
    );
};

export default SingleNews;