import IndividualMeals from "./IndividualMeals";

const MealsList = () => {
	const Meals = [
		{
			name: "Sushi",
			ingredients: "Finest fish and veggies",
			price: "22.99",
		},
		{
			name: "Rice",
			ingredients: "Finest fish and veggies",
			price: "22.99",
		},
		{
			name: "Dumpling",
			ingredients: "Finest fish and veggies",
			price: "22.99",
		},
	];
	return (
		<div className="w-4/5 bg-neutral-100 rounded-3xl">
			{Meals.map((meal) => (
				<div>
					<IndividualMeals
						name={meal.name}
						ingredients={meal.ingredients}
						price={meal.price}
                        className="w-full"
					/>
					<div className="w-full h-px bg-black" />
				</div>
			))}
		</div>
	);
};
export default MealsList;
