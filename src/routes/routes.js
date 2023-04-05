import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../page/Home";
import Contactus from "../page/ContactUs"
import OurOfferings from "../page/OurOfferings";
import Blogs from "../page/Blogs";
import OurTeampage from "../page/OurTeamPage";


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

        ],
    },

]);

export default routes;
