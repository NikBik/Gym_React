// WorkoutContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context with default values
const WorkoutContext = createContext({
  workouts: [],
  setWorkouts: () => {},
});

// Create a provider component
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Custom hook to use the WorkoutContext
export const useWorkout = () => useContext(WorkoutContext);

export default WorkoutContext;
