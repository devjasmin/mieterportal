import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="title"> Dashboard Mieterportal </div>
      <div className="subtitle"> Herzlich Willkommen im Mieterportal </div>

      <div className="card-container">
        <div className="card-bereich 1">Bereich 1</div>
        <div className="card-bereich 2">Bereich 2</div>
        <div className="card-bereich 3">Bereich 3</div>
        <div className="card-bereich 4">Bereich 4</div>
      </div>

      <div className="button-container">
        <Link to="/damage-report">
          <button className="damage">Schaden melden</button>
        </Link>
        <Link to="/contract">
          <button className="lcontract">Mietvertrag ansehen</button>
        </Link>
        <Link to="/contact">
          <button className="contact">Kontakt aufnehmen</button>
        </Link>
      </div>

      <div className="info-container">
        <div className="info-card">
          <h3>Immobilienverwaltung</h3>
          <p>Berner Immo AG</p>
          <a href="tel:+41564923366">056 492 33 66</a>
        </div>
        <div className="info-card">
          <h3>Hauswartung</h3>
          <p>Max Derungs</p>
          <a href="tel:+41795682163">079 568 21 63</a>
        </div>
        <div className="info-card">
          <h3>NOTFALL</h3>
          <p>24h Pikettdienst</p>
          <a href="tel:+41800111222">0800 111 222</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
