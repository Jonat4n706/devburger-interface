import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
     {
        path: "/cadastro",
        element: <Register />,
    }
]);