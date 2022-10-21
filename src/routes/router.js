import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/news/')
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Categories />
            },
            {
                path: '/news/:id',
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]

    }
])