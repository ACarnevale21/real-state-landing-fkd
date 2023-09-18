import axios from "axios";

export const sendContactForm = async (data) => {
  return axios.post("/api/contact", data);
};
