"use client";
import { useState } from "react";
import axios from "axios";

export default function RoomInput() {
	const [link, setLink] = useState("");

	const handleButtonClick = async () => {
		console.log("response");
		// axios api call to /api/spotify/get-playlist
		const response = await axios.post("/api/join-room", {
			roomCode: link,
		});

		console.log(`API call with link: ${link}`);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLink(e.target.value);
	};

	return (
		<div>
			<input type="text" value={link} onChange={handleInputChange} />
			<button onClick={handleButtonClick}>Join Room</button>
		</div>
	);
}
