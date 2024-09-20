import type React from "react";
import type { ReactNode } from "react";
import styles from "./index.module.scss";

// 布局组件
const Layout: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<>
			<div className={styles.wrapper}>{children}</div>
		</>
	);
};

export default Layout;
