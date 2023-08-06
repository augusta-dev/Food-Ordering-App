import Heading from "../UI/Heading";
import CartItem from "./CartItem";
import { Button } from "@nextui-org/react";

const CartLayout = () => {
	const CartItems = [
		{ name: "Sushi", price: "22.99", amount: 4 },
		{ name: "Sushi", price: "22.99", amount: 2 },
		{ name: "Sushi", price: "22.99", amount: 4 },
		{ name: "Sushi", price: "22.99", amount: 2 },
	];
	return (
		<Heading heading={"Cart"}>
			<div className="w-full flex flex-col align-middle justify-center px-20">
				{CartItems.map((cartItem, index) => (
					<div>
						<CartItem
							name={cartItem.name}
							price={cartItem.price}
							amount={cartItem.amount}
							className="w-full"
						/>
						{index !== CartItems.length - 1 ? (
							<div className="h-px bg-neutral-500 w-full" />
						) : null}
					</div>
				))}
				<div className="pt-4 pb-10 w-full flex flex-wrap justify-between font-rasa">
					<h1 className="text-black text-5xl font-normal">
						Total: <span className="text-red-400">$22.99</span>
					</h1>
					<Button className="bg-red-400 w-32 text-2xl">Order</Button>
				</div>
			</div>
		</Heading>
	);
};
export default CartLayout;
