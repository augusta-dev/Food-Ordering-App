import { Button } from "@nextui-org/react";
const MealItemForm = () => {
	return (
		<form action="">
			<div className="grid grid-flow-col align-center gap-6 ">
				<label className="w-1/2 font-rasaLight text-4xl">Amount</label>
				<input
					type="number"
					className="border-2 border-black rounded-lg bg-transparent w-14 h-8 pl-2 text-2xl font-rasa"
					min={1} defaultValue={1}
					max={10}
				/>
			</div>
			<div className="w-full">
				<Button
					radius="full"
					type=""
					className="w-full bg-red-400 text-3xl font-rasa pt-1"
				>
					+ Add
				</Button>
			</div>
		</form>
	);
};
export default MealItemForm;
