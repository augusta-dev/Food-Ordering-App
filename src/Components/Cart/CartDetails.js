import cart from "../../Assets/shopping-cart.png";
const CartDetails = (props) => {
	return (
		<div className={props.className}>
			<img
				src={cart}
				className="w-5 h-5 z-10"
				alt="cart"
			/>
			<div className="rounded-full border-white border-2 w-[18px] h-[18px]">
				<h1 className="h-4 w-4 text-white font-rasa text-lg -mt-[5.5px] ml-[4px]">
					5
				</h1>
			</div>
		</div>
	);
};
export default CartDetails;
