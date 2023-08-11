// import {Image} from "@nextui-org/react";
import "./Header.css";
import Header from "./Header";
import Title from "./Title";

const LandingPage = (props) => {
	return (
		<>
			<div
				id="background"
				className="w-screen h-screen bg-center bg-fixed flex"
			>
				<div
					className="w-screen h-screen"
					id="gradient-overlay"
				>
					<Header onShowCart={props.onShowCart} />
					<Title className="h-full -mt-[5.75rem] align-middle justify-center w-full flex flex-wrap"/>
				</div>
			</div>
			{/* <Image></Image> */}
		</>
	);
};
export default LandingPage;
