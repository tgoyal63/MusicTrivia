export const metadata = {
	title: "Music Trivia",
	description: "Created by Sidhant and Tushar",
};
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<SessionProvider session={null}>
				<body>{children}</body>
			</SessionProvider>
		</html>
	);
}
