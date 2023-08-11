import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);
	const submitEventHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (
			enteredAmountNumber === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 10
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form onSubmit={submitEventHandler}>
			<div className="grid grid-flow-col align-center gap-6 ">
				<label className="w-1/2 font-rasaLight text-4xl">Amount</label>
				<input
					ref={amountInputRef}
					type="number"
					className="border-2 border-black rounded-lg bg-transparent w-14 h-8 pl-2 text-2xl font-rasa"
					min={1}
					defaultValue={1}
					max={10}
				/>
			</div>
			<div className="w-full">
				<Button
					radius="full"
					type="submit"
					className="w-full bg-red-400 text-3xl font-rasa pt-1" 
				>
					+ Add
				</Button>
			</div>
			{!amountIsValid && <p>Please enter a valid amount!</p>}
		</form>
	);
};
export default MealItemForm;
