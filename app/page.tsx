"use client";
import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import { useState, useEffect } from "react";
import AvatarComponent from "./avatarComponent";
import Modal from "@/components/modal/Modal";
// Later create a modal functionality and creatre a global; wrapper for modals :(
// doesnt work if height is less than 870ox
export default function Home() {
	const [joinModal, setJoinModal] = useState(false);

	return (
		<>
			{joinModal && (
				<Modal modalState={joinModal} setModalState={setJoinModal} Question="Enter join code/link." ButtonText="Join" />
			)}
			<div className={`${styles.pageContainer} ${joinModal && styles.backDrop}`}>
				<Header />

				<div className={styles.tagLine}>
					<h1>
						Chill, Vibe <br />
						and Jam
						<br />
						with your friends <br />
						...
					</h1>
				</div>
				<AvatarComponent />
				<div className={styles.welcome}> WELCOME</div>
				<input className={styles.nameInput}></input>
				<div className={styles.buttons}>
					<button onClick={() => setJoinModal(true)}>Join</button>
					<button>Create</button>
				</div>
				<span className={styles.footer}>© Music Trivia 2023</span>
			</div>
		</>
	);
}
