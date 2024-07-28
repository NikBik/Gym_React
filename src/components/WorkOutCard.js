import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { addAWorkOut } from "../services/apis";
import UserWorkoutsContext from "./WorkoutContext";

const WorkoutCard = ({ workouts }) => {
  const [programId, setProgramId] = useState("");
  const [details, setDetails] = useState("");
  const [successfulSubmission, setSuccessfulSubmission] = useState("");
  const [failedSubmission, setFailedSubmission] = useState("");
  const { user } = useContext(UserContext);
  const { setUserWorkouts } = useContext(UserWorkoutsContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addAWorkOut({
        userId: Number(user.id),
        programId: Number(programId),
        details: details,
      });
      console.log(response);
      setUserWorkouts((prevWorkouts) => [...prevWorkouts, response]);
      setSuccessfulSubmission("Workout logged successfully!");
      setTimeout(() => {
        setSuccessfulSubmission("");
      }, 5000);
    } catch (error) {
      console.error("Error logging workout:", error);
      setFailedSubmission("Failed to log workout");
      setTimeout(() => {
        setFailedSubmission("");
      }, 5000);
    }
  };

  return (
    <div className="workout-card border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">
        Enjoyed thrilling Workout!!! Let's track your progress...💪
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Program Name:
          <div className="mb-6">
            <select
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
              required
              className="border p-2 rounded"
            >
              <option value="" disabled>
                Select a program
              </option>
              {workouts.map((workout) => (
                <option key={workout.programId} value={workout.programId}>
                  {workout.programNames}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="block mb-4">
          Details of Workout:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
            className="border p-2 rounded w-full"
          ></textarea>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Log Workout
        </button>
      </form>
      {successfulSubmission && (
        <div className="mt-4 text-green-600">{successfulSubmission}</div>
      )}
      {failedSubmission && (
        <div className="mt-4 text-red-600">{failedSubmission}</div>
      )}
    </div>
  );
};

export default WorkoutCard;
