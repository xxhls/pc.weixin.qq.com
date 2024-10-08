import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import type React from "react";
import Context from "./context";
import Layout from "./layout";

const App: React.FC = () => {
	return (
		<>
			<Context.Provider value={"hello world"}>
				<Layout>
					<Header />
					<Section />
					<Footer />
				</Layout>
			</Context.Provider>
		</>
	);
};

export default App;
