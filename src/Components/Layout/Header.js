import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Image,
} from "@nextui-org/react";
import foodTray from "../../Assets/food-tray.png";
import CartDetails from "../Cart/CartDetails";
const Header = (props) => {
	return (
		<>
			<Navbar
				className="bg-transparent pt-7"
				isBlurred="false"
			>
				<NavbarContent justify="start">
					<NavbarBrand>
						<Image
							src={foodTray}
							className="w-12 h-12 -mt-3"
						></Image>
						<h1 className="text-white font-sofia text-4xl pl-5">
							hmck
						</h1>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent
					justify="end"
					className="flex flex-wrap font-rasa"
				>
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white text-2xl"
						>
							Previous Orders
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white text-2xl"
						>
							|
						</Link>
					</NavbarItem>

					<NavbarItem
						className="flex flex-wrap w-auto gap-4 cursor-pointer"
						onClick={props.onShowCart}
					>
						<p className="text-white text-2xl">Cart</p>

						<CartDetails className="flex flex-wrap gap-4 mt-[5px]"></CartDetails>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	);
};
export default Header;
