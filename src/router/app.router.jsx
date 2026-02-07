import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ClientLayout } from "../yachai/layouts/ClientLayout";
import { HomePage } from "../yachai/pages/home/HomePage";
import { About } from "../yachai/pages/about/About";
import { CustomError } from "../shared/custom/CustomError"
export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <HomePage />
            }
        ]
    },


])