import "./App.css";
import LandingPage from "./Components/Layout/LandingPage";
import MealsSummary from "./Components/Meals/MealsSummary";
import { NextUIProvider } from "@nextui-org/react";

function App() {
	return (
		<NextUIProvider>
			<LandingPage />
			<MealsSummary />
		</NextUIProvider>
	);
}

export default App;
