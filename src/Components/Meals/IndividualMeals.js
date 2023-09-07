import { Image } from "@nextui-org/react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import MealItemForm from "./MealItemForm";
import lasagne from "../../Assets/Homemade-Ground-Beef-Lasagna.png";

const IndividualMeals = (props) => {
	const cartCtx = useContext(CartContext);
	const price = `$${props.price.toFixed(2)}`;
	const addItemHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
		console.log(cartCtx);
	};
	return (
		<div
			className={`${props.className} flex-wrap justify-between flex flex-col pb-7 rounded-3xl bg-red-50 w-full`}
		>
			<div>
				<img
					alt="food"
					className="!w-full z-0 rounded-t-3xl rounded-b-none pb-4"
					src={props.image}
				></img>
			</div>

			<div
				justify="start"
				className="mt-1 flex flex-col px-5"
			>
				<h2 className="font-rasa text-black text-[2.7vw] pt-2 leading-8">
					{props.name}
				</h2>
				<p className="font-cormorantItalic text-black font-light text-2xl leading-8 -mt-1">
					{props.ingredients}
				</p>
				<p className="text-red-500 text-2xl font-light font-rasa leading-6 float-right rou">
					{price}
				</p>
			</div>
			<div
				justify="end"
				className="flex flex-col justify-center items-center w-full"
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
