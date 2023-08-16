"use client";
import LogoImage from "../../assets/logo.png";
import Image from "next/image";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
	return (
		<>
			<div className={styles.headerContainer}>
				<Image src={LogoImage} alt="Logo" width={"150"} />
			</div>
			<hr className={styles.line} />
		</>
	);
}
