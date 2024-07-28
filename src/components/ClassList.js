import React, { useEffect, useState } from "react";
import { getClasses } from "../services/apis";
import "../styles/tailwind.css";

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getClasses();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  return (
    <div className="class-list-container">
      <div className="class-list-image"></div>
      <div className="class-list-content">
        <h2>Gym Classes</h2>
        <ul>
          {classes.map((gymClass) => (
            <li key={gymClass.id}>
              <h3>{gymClass.name}</h3>
              <p>{new Date(gymClass.schedule).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassList;
