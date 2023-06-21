import { NextRequest, NextResponse } from "next/server";
import { Client } from "spotify-api.js";
import { z } from "zod";

const PostRequestBodySchema = z.object({
	playlist: z.string(),
});

export const POST = async (req: NextRequest) => {
	try {
		const reqBody = await req.json();

		const requestBodyValidationResult = PostRequestBodySchema.safeParse(reqBody);

		if (!requestBodyValidationResult.success) {
			return NextResponse.json(
				{
					success: false,
					error: requestBodyValidationResult.error.errors[0].message,
				},
				{
					status: 400,
				}
			);
		}

		const { playlist } = requestBodyValidationResult.data;
		const client = await Client.create({
			refreshToken: true, // Set this to true.
			token: {
				clientID: process.env.SPOTIFY_CLIENT_ID || "", // Your spotify application client id.
				clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "", // Your spotify application client secret.
			},
			// This event is emitted whenever the token is refreshed by either 429 requests or [Client.refresh] method.
			onRefresh() {
				console.log(`Token has been refreshed. New token: ${client.token}!`);
			},
		});

		const data = await client.playlists.getTracks(playlist);

		for (let i = 0; i < data.length; i++) {
			const track = await client.tracks.get(data[i]?.track?.id || "");
			const allTracks = [];
			const finalData = {
				audio: track?.previewURL,
				title: track?.name,
				artists: track?.artists.map((artist) => artist.name),
				id: track?.id,
			};
			allTracks.push(finalData);
		}

		return NextResponse.json({
			success: true,
			data: data,
		});
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				error: "Something went wrong",
			},
			{
				status: 500,
			}
		);
	}
	// return NextResponse.next();
};
