import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import ContactPage from "../pages/contact/ContactPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
