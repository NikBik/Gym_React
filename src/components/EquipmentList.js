import "../styles/tailwind.css";
import React, { useEffect, useState } from "react";
import { getEquipments } from "../services/apis";

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const data = await getEquipments();
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };
    fetchEquipments();
  }, []);

  return (
    <div className="equipment-list-container">
      <div className="equipment-list">
        <h2>Gym Equipment</h2>
        <ul>
          {equipment.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Status: {item.status}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="equipment-list-image"></div>
    </div>
  );
};

export default EquipmentList;
