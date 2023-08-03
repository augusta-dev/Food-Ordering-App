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
			<Navbar className="bg-transparent" isBlurred="false">
				<NavbarContent justify="start">
					<NavbarBrand>
						<Image src={foodTray} className="w-8 h-8"></Image>
						<h1 className="text-white font-cormorant">
							hmck
						</h1>
					</NavbarBrand>
				</NavbarContent>
<h1 className="font-cormorant">Yes</h1>
				<NavbarContent
					justify="end"
					className="flex flex-wrap"
				>
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white"
						>
							Previous Orders
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white"
						>
							|
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="#"
							aria-current="page"
							className="text-white"
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
