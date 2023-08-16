import { Button } from "@nextui-org/react";

const CartItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	return (
		<div
			className={`${props.className} flex flex-wrap justify-between py-4`}
		>
			<div
				justify="start"
				className="mt-1 inline-flex flex-wrap"
			>
				<div>
					<h2 className="font-rasa text-black text-5xl leading-10">
						{props.name}
					</h2>
					<div className="flex flex-wrap justify-center items-center">
						<p className="text-red-500 text-4xl font-light font-rasa leading-10">
							{price}
						</p>
						<input
							type="number"
							className="border-2 border-black rounded-lg bg-transparent w-10 h-8 pl-2 ml-10 text-3xl font-rasa"
							min={1}
							max={10}
							value={props.amount}
						/>
					</div>
				</div>
			</div>
			<div
				justify="end"
				className="flex flex-col justify-center items-center w-auto"
			>
				<Button
					radius="lg"
					variant="ghost"
					color="black"
					className="border-black text-black font-bold font-rasa text-3xl"
					onClick={props.onRemove}
				>
					-
				</Button>
				<Button
					radius="lg"
					variant="ghost"
					color="black"
					className="border-black text-black font-bold font-rasa text-3xl"
					onClick={props.onAdd}
				>
					+
				</Button>
			</div>
		</div>
	);
};
export default CartItem;
