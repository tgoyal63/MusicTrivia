import bear from "../assets/avatars/bear.png";
import cat from "../assets/avatars/cat.png";
import chicken from "../assets/avatars/chicken.png";
import dog from "../assets/avatars/dog.png";
import elephant from "../assets/avatars/elephant.png";
import lion from "../assets/avatars/lion.png";
import monkey from "../assets/avatars/monkey.png";
import panda from "../assets/avatars/panda.png";
import otter from "../assets/avatars/otter.png";
import rabbit from "../assets/avatars/rabbit.png";
import tiger from "../assets/avatars/tiger.png";
import pig from "../assets/avatars/pig.png";
import raccon from "../assets/avatars/raccon.png";

import Image from "next/image";
import styles from "./avatarComponent.module.scss";
import { useState, useEffect } from "react";

export const avatars = [elephant, bear, cat, chicken, dog, lion, monkey, panda, otter, rabbit, tiger, pig, raccon];

export default function AvatarComponent() {
	const [avatar, setAvatar] = useState(avatars[0]);

	return (
		<>
			<div className={styles?.avatarContainer}>
				<Image src={avatar} alt="Avatar" width={"250"} />
			</div>
			<div className={styles?.shuffleButton}>
				<button onClick={() => setAvatar(avatars[Math.floor(Math.random() * avatars.length)])}>Shuffle</button>
			</div>
		</>
	);
}
