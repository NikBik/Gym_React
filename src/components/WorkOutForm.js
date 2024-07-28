import React, { useState } from "react";
import "../styles/tailwind.css";

const WorkoutForm = () => {
  const [userId, setUserId] = useState("");
  const [programId, setProgramId] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, programId, details }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="workout-form-container">
      <div className="workout-form">
        <h2 className="text">
          Thrilling Workout!!! Let's mark daily progress...💪{" "}
        </h2>
        <label>
          Program ID:
          <input
            type="number"
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
            required
          />
        </label>
        <label>
          Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Log Workout</button>
      </div>
      <div className="workout-form-image"></div>
    </div>
  );
};

export default WorkoutForm;
