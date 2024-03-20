import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import About from "./Pages/About.jsx";
import MainPage from "./Pages/MainPage.jsx";
import Courses from "./Pages/Courses.jsx";
import WhatYouGet from "./Pages/WhatYouGet.jsx";
import NewsletterSignup from "./Pages/Query.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/what-you-get",
          element: <WhatYouGet />,
        },
        {
          path: "/user-queries",
          element: <NewsletterSignup />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
