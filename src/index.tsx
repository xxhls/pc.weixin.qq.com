import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import App from "./App";
import "./index.css";

const dom = document.getElementById("root");
if (!dom) {
	throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(dom);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
