import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../page/Home";
import Contactus from "../page/ContactUs"
import OurOfferings from "../page/OurOfferings";
import Blogs from "../page/Blogs";
import OurTeampage from "../page/OurTeamPage";
import BlogDetails from "../components/Blogs/Blogdetails";
import BlogDetails2 from "../components/Blogs/BlogDetails2";
import BlogDetails3 from "../components/Blogs/BlogDetails3";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "ourOferings",
                element: <OurOfferings />,
            },
            {
                path: "ourTeam",
                element: <OurTeampage />,
            },
            {
                path: "contactUs",
                element: <Contactus />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "blogDetails",
                element: <BlogDetails />,
            },
            {
                path: "artificial-Intelligence-in-Realty",
                element: <BlogDetails2 />,
            },
            {
                path: "blogDetails3",
                element: <BlogDetails3 />,
            },

        ],
    },

]);

export default routes;
