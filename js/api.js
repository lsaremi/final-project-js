import { showToast, red1, red2, green1, green2 } from "./utilities/toast.js";

const BASE_URL = "http://localhost:3000";

export const checkUser = async (email, password) => {
  try {
    // Fetch user data from JSON Server
    const response = await fetch(
      `${BASE_URL}/users?email=${email}&password=${password}`
    );
    const userData = await response.json();
    // Check if authentication is successful
    if (userData.length > 0) {
      showToast("Authentication successful. You can sign in.", green1, green2);
    } else {
      showToast(
        "Authentication failed. Invalid email or password.",
        red1,
        red2
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
