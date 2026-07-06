import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="title"> Mieterportal </div>
      <div className="adresse">
        <div className="subtitle"> Herzlich Willkommen Max </div>
        <div className="subadresse">
          Bernstrasse 12, 2. OG rechts, 8055 Zürich
        </div>
      </div>
      <div className="news-section">
        <div className="news-title">Aktuelles</div>
        <div className="news-list">
          <div className="news-card">
            Lift wird am Dienstag, 30.07.2026 gewartet
          </div>
          <div className="news-card">Nebenkostenabrechnung verfügbar.</div>
          <div className="news-card">Neue Hausordnung gültig ab 01.07.2026</div>
          <div className="news-card">Gartenabfuhr am 15.07.2026</div>
        </div>
      </div>
      <div className="access-section">Schnellzugriff</div>
      <div className="button-container">
        <Link to="/damage-report">
          <button className="damage">Schaden melden</button>
        </Link>
        <Link to="/contract">
          <button className="lcontract">Dokumente ansehen</button>
        </Link>
        <Link to="/contact">
          <button className="contact">Marktplatz ansehen</button>
        </Link>
      </div>
      <div className="info-section">
        <div className="info-container">
          <div className="info-title">Kontaktinformationen</div>
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
          <div className="info-card-emergency">
            <h3>NOTFALL</h3>
            <p>24h Pikettdienst</p>
            <a href="tel:+41800111222">0800 111 222</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
