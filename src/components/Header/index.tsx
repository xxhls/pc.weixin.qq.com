import React, { useContext } from "react";
import Context from "@/context";

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
