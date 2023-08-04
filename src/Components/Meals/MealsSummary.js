import MealsList from "./MealsList";
const MealsSummary = () => {
	return (
		<div className="mt-20 flex flex-wrap align-middle justify-center">
			<h1 className="text-black text-9xl font-normal font-rasa">Specials</h1>
            <div className="w-full flex flex-wrap align-middle justify-center">
                <MealsList />
            </div>
		</div>
	);
};
export default MealsSummary;
