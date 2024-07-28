import React from "react";
import { useWorkout } from "./SubscriptionContext";
import Subscription from "./Subscription";

const SubscriptionList = () => {
  const { workouts } = useWorkout(); // Retrieve workouts from context

  return (
    <div className="subscription-list">
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <Subscription key={workout.programId} program={workout} />
        ))
      ) : (
        <div className="text-gray-500">No subscriptions available</div>
      )}
    </div>
  );
};

export default SubscriptionList;
