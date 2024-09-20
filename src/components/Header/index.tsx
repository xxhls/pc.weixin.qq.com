import type React from "react";
import logoSvg from "@/assets/images/logo.svg";
import Switch from "@/components/Switch";
import styles from "./index.module.scss";

// 头部组件
const Header: React.FC = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<img src={logoSvg} alt="logo" />
				<Switch />
			</div>
		</>
	);
};

export default Header;
