import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
import HomePage from "./pages/homePage";
import ProjectsPage from "./pages/projectsPage";
import ProjectPage from "./pages/projectPage";
import AboutPage from "./pages/aboutPage";
import { useEffect } from "react";
import axios from "axios";
import { Provider, useDispatch } from "react-redux";
import { fetchProjects } from "./store/slices/projects";
import { store } from "./store/store";
import { fetchDetails } from "./store/slices/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, element: <HomePage />, title: "Home" },
      { path: "projects", element: <ProjectsPage />, title: "projects" },
      { path: "about", element: <AboutPage />, title: "about" },
      { path: "projects/:id", element: <ProjectPage />, title: "project" },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://portfolio-d0721-default-rtdb.firebaseio.com/projects.json")
      .then((data) => {
        dispatch(fetchProjects(data.data));
      });
    axios
      .get("https://portfolio-d0721-default-rtdb.firebaseio.com/Details.json")
      .then((data) => {
        dispatch(fetchDetails(data.data));
      });
  }, []);
  return (

      <RouterProvider router={router} />
    
  );
}

export default App;
