import { Link } from "react-router-dom";
import "./ComingSoon.css";

function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <h2> Seite "{title}" wird bald aufgeschaltet </h2>

      <Link to="/" className="btn-lcontract-back">
        Zurück zum Dashboard
      </Link>
    </>
  );
}

export default ComingSoon;
