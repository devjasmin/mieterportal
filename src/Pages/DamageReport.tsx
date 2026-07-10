import { useReducer } from "react";
import "./DamageReport.css";
import { useNavigate } from "react-router-dom";

function DamageReport() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/mieterportal/");
    console.log("Button wurde angeklickt");
    /*alert("Zurück zu Dashboard);*/
  };

  const initialState = {
    firstName: "",
    lastName: "",
    what: "",
    date: "",
    notes: "",
  };

  const [form, dispatch] = useReducer(reducer, initialState);

  function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };

      case "RESET":
        return initialState;

      default:
        return state;
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    dispatch({
      type: "CHANGE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }

  function handleSubmit() {
    console.log("Formular", form);
    /*alert("Die Daten werden gesendet.");*/

    dispatch({ type: "RESET" });
  }

  return (
    <section>
      <div className="title">Schadensmeldung</div>
      <div className="subtitle">
        Liegenschaft 5430.001 - Bernstrasse 12, 8055 Zürich
      </div>
      <div className="form-group">
        <label htmlFor="firstName">Vorname </label>
        <input
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Vorname"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Nachname </label>
        <input
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="problem">Problem </label>
        <input
          id="problem"
          name="what"
          value={form.what}
          onChange={handleChange}
          placeholder="z.B. Kühlschrank"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">seit wann </label>
        <input
          id="date"
          type="date"
          value={form.date}
          name="date"
          onChange={handleChange}
          placeholder="geben Sie ein Datum ein"
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes"> Beschreibung </label>
        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          placeholder="geben Sie eine Notiz ein"
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn-send" onClick={handleSubmit}>
        Senden
      </button>{" "}
      <br />
      <button className="btn-back" onClick={handleBack}>
        Zurück
      </button>
    </section>
  );
}

export default DamageReport;
