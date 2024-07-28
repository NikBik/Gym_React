// ProgramCard.jsx
import React from "react";
import "../styles/tailwind.css";

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <h3 className="program-title">{program.programNames}</h3>
      <p className="program-description">{program.description}</p>
      <div className="program-details">
        <p className="program-charges">
          Charges: ${program.charges.toFixed(2)}
        </p>
        <p className="program-period">Period: {program.period}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
