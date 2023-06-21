"use client";
import { useSession } from "next-auth/react";
import Input from "@/components/startGame";
import RoomInput from "@/components/joinRoom";

export default function Home() {
	// const session = useSession({ required: true });
	return (
		<>
			{/* <h1>Hi, {session?.data?.user?.name}</h1> */}
			<Input />
			<RoomInput />
		</>
	);
}
