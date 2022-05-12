import axios from "axios";

const STAGING = "https://api-dev.veeta.co.uk";

export const axiosInstance = axios.create({
  baseURL: STAGING,
});
