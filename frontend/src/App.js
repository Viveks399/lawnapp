import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Career from "./components/Career";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Bookings from "./components/Bookings";
import AdminOfferControl from "./components/AdminOfferControl";
import Offers from "./components/Offers";
import Photos from "./components/Photos";
import AdminPhotoControl from "./components/AdminPhotoControl";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/bookings",
      element: <Bookings />,
    },
    {
      path: "/adminoffers",
      element: <AdminOfferControl />,
    },
    {
      path: "/offers",
      element: <Offers />,
    },
    {
      path: "/adminphotos",
      element: <AdminPhotoControl />,
    },
    {
      path: "/photos",
      element: <Photos />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
