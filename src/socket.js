import { io } from "socket.io-client";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const socket = io("https://texol-server-hc8k.onrender.com", {
  transports: ["websocket"],
});

export default socket;
