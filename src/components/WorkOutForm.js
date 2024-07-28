import React, { useContext, useEffect, useState } from "react";
import "../styles/tailwind.css";
import UserContext from "./UserContext.js";
import {
  addAWorkOut,
  getWorkout,
  getWorkoutDetails,
} from "../services/apis.js";
import WorkoutContext from "./SubscriptionContext.js";
import UserWorkoutsContext from "./WorkoutContext.js";
import WorkoutCard from "./WorkOutCard.js";

const WorkoutForm = () => {
  const { user } = useContext(UserContext);
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const { setUserWorkouts } = useContext(UserWorkoutsContext);

  useEffect(() => {
    const fetchSubscribedWorkouts = async () => {
      try {
        const data = await getWorkout(user.id);
        console.log("workouts : ", data);
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchSubscribedWorkouts();
  }, [user.id]);

  useEffect(() => {
    const fetchUserWorkouts = async () => {
      try {
        const data = await getWorkoutDetails(user.id);
        console.log("user_workouts : ", data);
        setUserWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchUserWorkouts();
  }, [user.id]);

  return (
    <div className="workout-form-container">
      <div className="workout-form">
        {workouts != "undefined" && workouts.length > 0 ? (
          <WorkoutCard workouts={workouts} />
        ) : (
          <div className="no-active-plans-message">
            <h1>
              Hey {user.firstName}, Subscribe from above list of memberships and
              start tracking your progress.
            </h1>
            <h1>Please refer to list of memberships above.</h1>
          </div>
        )}
      </div>
      <div className="workout-form-image"></div>
    </div>
  );
};

export default WorkoutForm;
