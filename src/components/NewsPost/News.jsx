import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";



const News = () => {
    const newsData = useLoaderData();
    // console.log(newsData)

    return(
        <div>
            <h3 className="font-bold mb-4">Dragon News Home</h3>

            <div>
                {
                    newsData.data.map(news => <SingleNews key={news._id} news={news}></SingleNews>)
                }
            </div>
        </div>
    )
};

export default News;