import cart from "../../Assets/shopping-cart.png";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const CartDetails = (props) => {
	const cartCtx = useContext(CartContext);
	const noOfCartItems = cartCtx.items.reduce((curNum, item) => {
		return curNum + item;
	}, 0);
	return (
		<div className={props.className}>
			<img
				src={cart}
				className="w-5 h-5 z-10"
				alt="cart"
			/>
			<div className="rounded-full border-white border-2 w-[18px] h-[18px]">
				<h1 className="h-4 w-4 text-white font-rasa text-lg -mt-[5.5px] ml-[4px]">
					{noOfCartItems}
				</h1>
			</div>
		</div>
	);
};
export default CartDetails;
