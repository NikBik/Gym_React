import ClassList from "./ClassList";
import EquipmentList from "./EquipmentList";
import MembershipForm from "./MembershipForm";
import WorkoutForm from "./WorkOutForm";

const BodyComponent = () => (
  <div>
    <MembershipForm />
    <WorkoutForm />
    <ClassList />
    <EquipmentList />
  </div>
);

export default BodyComponent;
