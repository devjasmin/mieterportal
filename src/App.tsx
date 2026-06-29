import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import DamageReport from "./Pages/DamageReport";
import ComingSoon from "./Pages/ComingSoon";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },

  {
    path: "/damage-report",
    element: <DamageReport />,
  },
  {
    path: "/contract",
    element: <ComingSoon title="Mietvertrag" />,
  },

  {
    path: "/contact",
    element: <ComingSoon title="Kontakt" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;

  /*return <Dashboard />;*/
}

export default App;
