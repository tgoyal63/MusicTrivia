export const metadata = {
	title: "Music Trivia",
	description: "Created by Sidhant and Tushar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
