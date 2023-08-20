import styles from "./Modal.module.scss";
import { Dispatch, SetStateAction } from "react";

interface Props {
	modalState: boolean;
	setModalState: Dispatch<SetStateAction<boolean>>;
	Question: string;
	ButtonText: string;
}

const Modal = (props: Props) => {
	return (
		<div className={styles.modalContainer} onClick={() => props.setModalState((prev) => !prev)}>
			<div className={styles.dialogBox} onClick={(e) => e.stopPropagation()}>
				{props.Question}
				<input />
				<button>{props.ButtonText || "Submit"}</button>
			</div>
		</div>
	);
};

export default Modal;
