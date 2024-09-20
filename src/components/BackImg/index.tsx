import snapshotSvg from "@/assets/images/snapshot.svg";
import cls from "classnames";
import type React from "react";
import styles from "./index.module.scss";

// 布局组件
const BackImg: React.FC = () => {
	return (
		<>
			<div
				className={cls(styles.wrapper, "animate__animated", "animate__fadeInUp")}
			>
				<img src={snapshotSvg} alt="background" className={styles.snapshot} />
			</div>
		</>
	);
};

export default BackImg;
