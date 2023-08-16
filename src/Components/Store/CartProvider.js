import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item);
		console.log(updatedItems);
		const updatedTotalAmount =
			state.totalAmount + (action.item.price * action.item.amount);
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	// } else if (action.type === "REMOVE") {
	// 	const updatedItems = state.items.filter(
	// 		(item) => item.id !== action.id,
	// 	);
    //     // let totalAmount = 0;
	// 	// const updatedTotalAmount = state.items.forEach((item) => {
	// 	// 	totalAmount += item.amount * item.price;
    //     //     return totalAmount;
	// 	// });

    //     // let deletedItem = state.items.filter(item => item.id === action.id);
    //     // const updatedTotalAmount = state.totalAmount - (deletedItem.amount * deletedItem.price);
        
	// 	// return {
	// 	// 	items: updatedItems,
	// 	// 	totalAmount: updatedTotalAmount,
	// 	// };
	// }
}
	return defaultCartState;
};
const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState,
	);
	const addItemHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
