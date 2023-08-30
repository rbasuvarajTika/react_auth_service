import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./Pages/AuthPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import HomePage from "./Pages/HomePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage/>,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword/>,
    },
    {
      path: "/resetpassword",
      element: <ResetPassword/>,
    },
     {
       path: "/homepage",
       element: <HomePage/>,
    },
   
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;