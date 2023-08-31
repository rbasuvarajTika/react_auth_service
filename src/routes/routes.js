import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../Pages/AuthPage";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import HomePage from "../Pages/HomePage";
export const userRouter = [

    {
        path: "/forgotpassword",
        element: <ForgotPassword />,
    },
    {
        path: "/resetpassword",
        element: <ResetPassword />,
    },

    {
        path: "/homepage",
        element: <HomePage />,
    },
];
export const openRouter = [

    {
        path: "/",
        element: <AuthPage />,
    },


];
