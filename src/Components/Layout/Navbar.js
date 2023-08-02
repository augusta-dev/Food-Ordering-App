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
			<Navbar onMenuOpenChange={setIsMenuOpen}>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="lg:hidden"
					/>
					<NavbarBrand>
						<p className="font-bold text-inherit text-white">ACME</p>
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
				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === menuItems.length - 1
										? "danger"
										: "foreground"
								}
								className="w-full"
								href="#"
								size="lg"
							>
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</>
	);
};
export default NavBar;
