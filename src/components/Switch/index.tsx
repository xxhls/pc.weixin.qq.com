import type React from "react";
import styles from "./index.module.scss";

const Switch: React.FC = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.active}>简</span>
				<span>繁</span>
				<span>EN</span>
			</div>
		</>
	);
};

export default Switch;
