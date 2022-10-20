import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

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
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]

    }
])