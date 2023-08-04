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
import foodTray from "../../Assets/food-tray.png"

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["Previous Orders", "Cart"];
	return (
		<>
			<Navbar className="bg-transparent pt-7" isBlurred="false">
				<NavbarContent justify="start">
					<NavbarBrand>
						<Image src={foodTray} className="w-12 h-12 -mt-3"></Image>
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
					<Image
						src={cart}
						className="w-6 h-auto"
					></Image>
				</NavbarContent>
				
			</Navbar>
		</>
	);
};
export default NavBar;
