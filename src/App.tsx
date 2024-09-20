import Header from "@/components/Header";
import type React from "react";
import Context from "./context";
import Layout from "./layout";

const App: React.FC = () => {
	return (
		<>
			<Context.Provider value={"hello world"}>
				<Layout>
					<Header />
				</Layout>
			</Context.Provider>
		</>
	);
};

export default App;
