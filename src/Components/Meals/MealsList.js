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
		<div className="w-full bg-neutral-100 rounded-3xl">
			{Meals.map((meal, index) => (
				
				<div>
					<IndividualMeals
						name={meal.name}
						ingredients={meal.ingredients}
						price={meal.price}
                        className="w-full"
					/>
					{ index !== Meals.length - 1 ? (<div className="w-full h-px bg-black" />) : null }
						
						
				</div>
			))}
		</div>
	);
};
export default MealsList;
