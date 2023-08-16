"use client";
import LogoImage from "@/assets/logo.png";
import Image from "next/image";
import styles from "./loading.module.scss";
import { useState, useEffect } from "react";

export default function Loader() {
	const [loadingText, setLoadingText] = useState("Loading");
	useEffect(() => {
		const interval = setInterval(() => {
			setLoadingText((loadingText) => {
				if (loadingText === "Loading...") {
					return "Loading";
				} else {
					return loadingText + ".";
				}
			});
		}, 200);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className={styles.logoContainer}>
				<Image src={LogoImage} alt="Logo" width={"300"} />
			</div>
			<div className={styles.loadingText}>{loadingText}</div>
		</>
	);
}
