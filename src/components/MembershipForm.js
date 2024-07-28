import React, { useEffect, useState, useContext } from "react";
import "../styles/tailwind.css";
import { getPrograms, subscribeToProgram } from "../services/apis";
import ProgramCard from "./ProgramCard";
import UserContext from "./UserContext.js";
import { useWorkout } from "./SubscriptionContext.js";

const MembershipForm = () => {
  const [programId, setProgramId] = useState("");
  const [programs, setPrograms] = useState([]);
  const { user } = useContext(UserContext);
  const [succesfulSubscription, setSuccesfulSubscription] = useState();
  const { workouts, setWorkouts } = useWorkout();
  const [failedSubscription, setFailedSubscription] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await subscribeToProgram({
        userId: Number(user.id),
        planId: Number(programId),
      });
      console.log(response);
      const program = programs.find((p) => p.programId === Number(programId));
      setWorkouts((prevWorkouts) => [...prevWorkouts, program]);
      setSuccesfulSubscription(
        "Subscribed sucessfully to: " + program.programNames
      );
      setTimeout(() => {
        setSuccesfulSubscription("");
      }, 5000);
    } catch (error) {
      setFailedSubscription("Failed to Subscribe");
      setTimeout(() => {
        setFailedSubscription("");
      }, 5000);
    }
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await getPrograms();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <div className="membership-form-container">
      <div className="membership-form-image"></div>
      <div className="membership-form-content">
        <form onSubmit={handleSubmit}>
          <h2 className="text">Excited for Transformation 🚀🚀</h2>
          <h2 className="text">We are toooo !!!!!! 😍</h2>
          <h2 className="text">Choose plans that motivates you 🤸‍♀️ </h2>
          <div className="mb-6">
            <select
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a plan
              </option>
              {programs.map((program) => (
                <option key={program.programId} value={program.programId}>
                  {program.programNames}
                </option>
              ))}
            </select>
            {programId !== "" && programId !== null ? (
              <ProgramCard
                program={programs.find(
                  (p) => p.programId === Number(programId)
                )}
              />
            ) : (
              <div></div>
            )}
          </div>
          <button type="submit">Subscribe</button>
          <div className="message-container">
            {succesfulSubscription && (
              <div className="message success-message fade-out">
                {succesfulSubscription}
              </div>
            )}
            {failedSubscription && (
              <div className="message error-message">{failedSubscription}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
