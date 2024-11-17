import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/leftLayout/LeftAside";
import Navbar from "../components/Navbar";
import News from "../components/NewsPost/News";
import RightAside from "../components/RightAside/RightAside";



const HomeLayouts = () => {
    return (
        <div>
           
            <header>
        <Header></Header>
            </header>
            <section className="w-10/12 mx-auto">
            <LatestNews></LatestNews>
            </section>
            <nav className="w-10/12 mx-auto">
            <Navbar></Navbar>
            </nav>
           <main className="w-10/12 mx-auto grid md:grid-cols-12 gap-6 mt-10">
            <aside className="col-span-3">
                <LeftAside></LeftAside>
            </aside>

        
            <div className="col-span-6">
            <Outlet ></Outlet>
            </div>
        
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside> 
          </main>
        </div>
    );
};

export default HomeLayouts;