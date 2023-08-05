import "./App.css";
import LandingPage from "./Components/Layout/LandingPage";
import MealsSummary from "./Components/Meals/MealsSummary";
import { NextUIProvider } from "@nextui-org/react";
import CartLayout from "./Components/Cart/CartLayout";

function App() {
	return (
		<NextUIProvider>
			<LandingPage />
			<MealsSummary />
			<CartLayout />
		</NextUIProvider>
	);
}

export default App;
