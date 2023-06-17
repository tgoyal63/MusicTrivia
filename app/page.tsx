"use client";
import { useSession } from "next-auth/react";

export default function Home() {
	const session = useSession({ required: true });
	return (
		<>
			<h1>hi, {session?.data?.user?.name}, Hii</h1>
		</>
	);
}
