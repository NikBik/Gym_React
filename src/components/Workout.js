import React from "react";

const Workout = ({ workout }) => {
  return (
    <div className="workout-card border p-4 rounded shadow-md bg-white">
      <h3 className="workout-title text-xl font-semibold">
        Workout ID: {workout.id}
      </h3>
      <p className="workout-details text-gray-700 mt-2">
        Details: {workout.details}
      </p>
      <p className="workout-date font-medium mt-2">
        Date: {new Date(workout.workoutDate).toLocaleDateString()}
      </p>
      <p className="workout-program-id">Program ID: {workout.programId}</p>
    </div>
  );
};

export default Workout;
