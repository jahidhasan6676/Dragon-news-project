import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftAside = () => {
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=> res.json())
        .then(data => setCategory(data.data.news_category))
    },[])
    // console.log(category)
    return (
        <div>
            <h2 className="font-bold">All Category</h2>
            <div className="flex flex-col gap-2 w-full mt-4">
            {
                category.map(category =>
                     <NavLink
                     to={`/category/${category.category_id}`} key={category.category_id}
                      className="btn">{category.category_name}
                     </NavLink>)
            }
            </div>
        </div>
    );
};

export default LeftAside;