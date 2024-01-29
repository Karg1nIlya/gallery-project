import { RouterProvider, createHashRouter } from "react-router-dom";
import "./app.css";
import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./pages/Layout/Layout";
import { AboutPage } from "./pages/AboutPage/AboutPage";

export function App() {

    const router = createHashRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: 'about',
                    element: <AboutPage/>
                },
                {
                    path: '/',
                    element: <MainPage />
                },
            ]
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}
