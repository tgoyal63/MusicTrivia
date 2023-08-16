"use client";
import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import { useState, useEffect } from "react";
import AvatarComponent from "./avatarComponent";

export default function Home() {
	return (
		<>
			<Header />
			<div className={styles.pageContainer}>
				<div className={styles.tagLine}>
					<h1>
						Chill, Vibe <br />
						and Jam
						<br />
						with your friends <br />
						...
					</h1>
				</div>
			</div>
			<AvatarComponent />
		</>
	);
}
