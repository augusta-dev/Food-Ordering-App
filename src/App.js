import "./App.css";
import Header from "./Components/Layout/Header";
import { NextUIProvider } from "@nextui-org/react";

function App() {
	return (
		<NextUIProvider>
			<Header />
		</NextUIProvider>
	);
}

export default App;
