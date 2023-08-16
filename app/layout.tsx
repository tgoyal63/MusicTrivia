export const metadata = {
	title: "Music Trivia",
	description: "Created by Sidhant ,Tushar and Nikhil",
};

import Provider from "@/components/Provider";
import "./global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Provider>
				<body>{children}</body>
			</Provider>
		</html>
	);
}
