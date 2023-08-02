// import {Image} from "@nextui-org/react";
import "./Header.css";
import NavBar from "./Navbar";

const Header = (props) => {
	return (
		<>
			<div
				id="background"
				className="w-screen h-screen bg-center"
			>
				<div
					className="w-screen h-screen"
					id="gradient-overlay"
				>
					<NavBar />
				</div>
			</div>
			{/* <Image></Image> */}
		</>
	);
};
export default Header;
