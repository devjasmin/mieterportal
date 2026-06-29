import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="title">Dashboard</div>
      <div className="subtitle">Lieber Nutzer</div>

      <div className="button-container">
        <Link to="/damage-report">
          <button className="damage">Schaden melden</button>
        </Link>
        <Link to="/contract">
          <button className="lcontract">Mietvertrag</button>
        </Link>
        <Link to="/contact">
          <button className="contact">Kontakt</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
