import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../page/Home";
import Contactus from "../page/ContactUs"
import OurOfferings from "../page/OurOfferings";
import Blogs from "../page/Blogs";
import OurTeampage from "../page/OurTeamPage";
import BlogDetails from "../components/Blogs/Blogdetails";


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

        ],
    },

]);

export default routes;
