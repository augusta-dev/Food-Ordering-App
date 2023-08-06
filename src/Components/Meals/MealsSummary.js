import Heading from "../UI/Heading";
import MealsList from "./MealsList";
const MealsSummary = () => {
	return (
		<Heading heading={"Specials"} className="bg-transparent">
			<div className="w-full flex flex-wrap align-middle justify-center">
				<MealsList />
			</div>
		</Heading>
		// <div className=" flex flex-wrap justify-center items-center w-full align-middle">
		// 	<div className="mt-14 mb-14 flex flex-wrap align-middle justify-center w-full max-w-[1024px]">
		// 		<h1 className="text-black text-8xl font-normal font-rasa pb-7">
		// 			Specials
		// 		</h1>

		// 	</div>
		// </div>
	);
};
export default MealsSummary;
