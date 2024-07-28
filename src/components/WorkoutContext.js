// WorkoutContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context with default values
const UserWorkoutsContext = createContext({
  userworkouts: [],
  setUserWorkouts: () => {},
});

// Create a provider component
export const UserWorkoutProvider = ({ children }) => {
  const [userworkouts, setUserWorkouts] = useState([]);

  return (
    <UserWorkoutsContext.Provider value={{ userworkouts, setUserWorkouts }}>
      {children}
    </UserWorkoutsContext.Provider>
  );
};

// Custom hook to use the WorkoutContext
export const useUserWorkout = () => useContext(UserWorkoutsContext);

export default UserWorkoutsContext;
