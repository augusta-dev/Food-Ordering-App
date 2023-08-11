import Heading from "../UI/Heading";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { Button } from "@nextui-org/react";

const CartLayout = (props) => {
	const CartItems = [
		{ name: "Sushi", price: 22.99, amount: 4, id: 1 },
		{ name: "Sushi", price: 22.99, amount: 2, id: 2 },
		{ name: "Sushi", price: 22.99, amount: 4, id: 3 },
		{ name: "Sushi", price: 22.99, amount: 2, id: 4 },
	];
	return (
		<Modal onClose={props.onClose}>
			<Heading heading={"Cart"}>
				<div className="w-full flex flex-col align-middle justify-center px-20 pb-10">
					{CartItems.map((cartItem, index) => (
						<div>
							<CartItem
								name={cartItem.name}
								price={cartItem.price}
								amount={cartItem.amount}
								key={cartItem.id}
								className="w-full"
							/>
							{index !== CartItems.length - 1 ? (
								<div className="h-px bg-neutral-500 w-full" />
							) : null}
						</div>
					))}
					<div className="pt-4 pb-5 w-full flex flex-wrap justify-between font-rasa">
						<h1 className="text-black text-5xl font-normal">
							Total: <span className="text-red-400">$22.99</span>
						</h1>
						<Button className="bg-red-400 w-32 text-2xl">
							Order
						</Button>
					</div>
					<Button
						className="w-full border-red-400 text-red-400 text-2xl font-rasa"
						variant="ghost"
						color="red"
						onClick={props.onClose}
					>
						Close
					</Button>
				</div>
			</Heading>
		</Modal>
	);
};
export default CartLayout;
