import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Image,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { useState } from "react";
import cart from "../../Assets/shopping-cart (3).png";
import cart1 from "../../Assets/shopping-cart (2).png";

import foodTray from "../../Assets/food-tray.png";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["Previous Orders", "Cart"];
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
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white text-2xl"
						>
							Cart
						</Link>
					</NavbarItem>
					<NavbarItem>
						<img
							src={cart}
							className="w-5 h-5 z-10" alt="cart"
						 />
						 {/* <img src= alt="" /> */}
						{/* <Image
							src={cart1}
							className="w-9 h-8 z-10"
						></Image> */}
					</NavbarItem>
					<NavbarItem>
						<div className="rounded-full border-white border-2 w-[18px] h-[18px]">
							<h1 className="h-4 w-4 text-white font-rasa text-lg -mt-[5.5px] ml-[4px]">5</h1>
						</div>
						 {/* <img src= alt="" /> */}
						{/* <Image
							src={cart1}
							className="w-9 h-8 z-10"
						></Image> */}
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	);
};
export default NavBar;
