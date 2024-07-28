import React from "react";
import "../styles/tailwind.css";

const Subscription = ({ program }) => {
  return (
    <div className="subscription-card border p-4 rounded shadow-md bg-white">
      <h3 className="program-title text-xl font-semibold">
        {program.programNames}
      </h3>
      <p className="program-description text-gray-700 mt-2">
        {program.description}
      </p>
      <div className="program-details mt-4">
        <p className="program-charges font-medium">
          Charges: ${program.charges.toFixed(2)}
        </p>
        <p className="program-period">Period: {program.period}</p>
        <p className={"program-status text-green-500"}>Status: Active</p>
      </div>
    </div>
  );
};

export default Subscription;
