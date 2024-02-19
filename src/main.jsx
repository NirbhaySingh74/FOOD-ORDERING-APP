import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Body from "./components/Body.jsx";
// import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

import ProfileClass from "./components/ProfileClass.jsx";
import Instamart from "./components/Instamart.jsx";
import { lazy } from "react";

const About = lazy(() => import("./components/About.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            {" "}
            <About />
          </Suspense>
        ),

        children: [
          {
            path: "profile",
            element: <ProfileClass name={"Nirbhay Singh"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
