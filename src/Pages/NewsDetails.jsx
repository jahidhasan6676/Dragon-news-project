import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightAside from "../components/RightAside/RightAside";


const NewsDetails = () => {

    const newsDetails = useLoaderData();
     const details = newsDetails.data[0];
    //  console.log(details)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-5 mt-10 mb-10">
                <section className="col-span-9 border-2 rounded-md">
                    <div className="card  p-4">
                        <figure>
                            <img
                                src={details.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                
                               {details.title}
                            </h2>
                            <p>{details.details}</p>
                            <Link to={`/category/${details.category_id}`} className="text-sm bg-red-500 text-white p-1 w-fit px-2">All news in this category</Link>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;