import type React from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import BackImg from "@/components/BackImg";
import styles from "./index.module.scss";

// 布局组件
const Layout: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<>
			<div className={styles.wrapper}>{children}</div>
			{createPortal(<BackImg />, document.body)}
		</>
	);
};

export default Layout;
