import "./App.css";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { openRouter, userRouter } from "./routes/routes";

function App() {
  const token = localStorage.getItem("token");
  const router = token ? createBrowserRouter(userRouter) : createBrowserRouter(openRouter)

  console.log(localStorage.getItem("token"), router)
  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;