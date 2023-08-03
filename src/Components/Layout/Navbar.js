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

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["Previous Orders", "Cart"];
	return (
		<>
			<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent" isBlurred="false">
				<NavbarContent justify="start">
					<NavbarBrand>
						<p className="font-bold text-white">
							ACME
						</p>
					</NavbarBrand>
				</NavbarContent>

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
