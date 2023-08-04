import "./App.css";
import LandingPage from "./Components/Layout/LandingPage";
import { NextUIProvider } from "@nextui-org/react";

function App() {
	return (
		<NextUIProvider>
			<LandingPage />
		</NextUIProvider>
	);
}

export default App;
