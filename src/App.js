import "./App.css";
import LandingPage from "./Components/Layout/LandingPage";
import MealsSummary from "./Components/Meals/MealsSummary";
import { NextUIProvider } from "@nextui-org/react";
import CartLayout from "./Components/Cart/CartLayout";
import { useState } from "react";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => {	
		setCartIsShown(true);
	}
	const hideCartHandler = () => {	
		setCartIsShown(false);
	}
	return (
		<NextUIProvider>
			{cartIsShown && <CartLayout onClose={hideCartHandler} />}
			<main>
				<LandingPage onShowCart={showCartHandler} />
				<section>
					<MealsSummary />
				</section>
			</main>
			{/* <CartLayout /> */}
		</NextUIProvider>
	);
}

export default App;
