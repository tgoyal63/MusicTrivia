// code to initialize a socket.io connection to localhost:5000
import io from "socket.io-client";

const socket = io("http://localhost:5000", {
	transports: ["websocket", "polling"],
	upgrade: true,
	forceNew: true,
	timeout: 10000,
});

export default socket;
