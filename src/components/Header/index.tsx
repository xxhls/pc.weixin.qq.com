import Context from "@/context";
import type React from "react";
import { useContext } from "react";

// 头部组件
const Header: React.FC = () => {
	const context = useContext(Context);
	return (
		<>
			<div>{context}</div>
		</>
	);
};

export default Header;
