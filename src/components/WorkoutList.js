import React from "react";
import { useUserWorkout } from "./WorkoutContext";
import Workout from "./Workout";

const WorkoutList = () => {
  const { userworkouts } = useUserWorkout();

  return (
    <div className="workout-list">
      {userworkouts.length > 0 ? (
        userworkouts.map((workout) => (
          <Workout key={workout.id} workout={workout} />
        ))
      ) : (
        <div className="text-gray-500">No workouts recorded</div>
      )}
    </div>
  );
};

export default WorkoutList;
