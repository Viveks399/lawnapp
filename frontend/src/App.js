import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Career from "./components/Career";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/career",
      element: <Career />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
