import { Button } from "@nextui-org/react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import MealItemForm from "./MealItemForm";

const IndividualMeals = (props) => {
	const cartCtx = useContext(CartContext);
	const price = `$${props.price.toFixed(2)}`;
	const addItemHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		})
		console.log(cartCtx);
	};
	return (
		<div
			className={`${props.className} flex flex-wrap justify-between px-9 py-4`}
		>
			<div
				justify="start"
				className="mt-1"
			>
				<h2 className="font-rasa text-black text-5xl leading-10">
					{props.name}
				</h2>
				<p className="font-cormorantItalic text-black font-light text-4xl leading-8">
					{props.ingredients}
				</p>
				<p className="text-red-500 text-4xl font-light font-rasa leading-10">
					{price}
				</p>
			</div>
			<div
				justify="end"
				className="flex flex-col justify-center items-center w-48"
			>
				<MealItemForm onAddToCart={addItemHandler} />
				{/* <div className="grid grid-flow-col align-center gap-6 ">
					<p className="w-1/2 font-rasaLight text-4xl">Amount</p>
					<input
						type="number"
						className="border-2 border-black rounded-lg bg-transparent w-14 h-8 pl-2 text-2xl font-rasa" min={1} max={10}
					/>
				</div>
				<div className="w-full">
					<Button radius="full" type="" className="w-full bg-red-400 text-3xl font-rasa pt-1">+ Add</Button>
				</div> */}
			</div>
		</div>
	);
};
export default IndividualMeals;
