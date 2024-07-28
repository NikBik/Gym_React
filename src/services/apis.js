import { BASE_URL, myAxios } from "./helper";

// Function to get classes
export const getClasses = async () => {
  try {
    const response = await myAxios.get("/classes");
    return response.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

// Function to get equipment
export const getEquipments = async () => {
  try {
    const response = await myAxios.get("/equipment");
    return response.data;
  } catch (error) {
    console.error("Error fetching equipment:", error);
    throw error;
  }
};

export const getUser = async (data) => {
  const response = await myAxios.get("/validateUser", {
    params: {
      userName: data.name,
      password: data.password,
    },
  });
  return response.data;
};

export const getPrograms = async () => {
  const response = await myAxios.get("/programs");
  return response.data;
};

export const subscribeToProgram = async (data) => {
  const response = await myAxios.post(
    `/memberships/subscribe?userId=${data.userId}&planId=${data.planId}`
  );
  return response.data;
};
