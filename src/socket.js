import { io } from "socket.io-client";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});

export default socket;
