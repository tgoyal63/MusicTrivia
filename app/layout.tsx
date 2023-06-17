export const metadata = {
	title: "Music Trivia",
	description: "Created by Sidhant and Tushar",
};

import Provider from "@/components/Provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Provider>
				<body>{children}</body>
			</Provider>
		</html>
	);
}
