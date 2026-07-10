import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import DamageReport from "./Pages/DamageReport";
import ComingSoon from "./Pages/ComingSoon";

const router = createBrowserRouter([
  { path: "/mieterportal/", element: <Dashboard /> },

  {
    path: "/mieterportal/damage-report",
    element: <DamageReport />,
  },
  {
    path: "/mieterportal/contract",
    element: <ComingSoon title="Dokumente" />,
  },

  {
    path: "/mieterportal/contact",
    element: <ComingSoon title="Marktplatz" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;

  /*return <Dashboard />;*/
}

export default App;
