import IndividualMeals from "./IndividualMeals";

const MealsList = () => {
	const Meals = [
		{
			name: "Sushi",
			ingredients: "Finest fish and veggies",
			price: 22.99,
			id:'m1',
		},
		{
			name: "Rice",
			ingredients: "Finest fish and veggies",
			price: 22.99,
			id:'m2',
		},
		{
			name: "Dumpling",
			ingredients: "Finest fish and veggies",
			price: 22.99,
			id:'m3',
		},
	];
	return (
		<div className="w-full bg-neutral-100 rounded-3xl">
			{Meals.map((meal, index) => (
				
				<>
					<IndividualMeals
						name={meal.name}
						ingredients={meal.ingredients}
						price={meal.price}
                        className="w-full"
						key={meal.id}
						id={meal.id}
					/>
					{ index !== Meals.length - 1 ? (<div className="w-full h-px bg-black" />) : null }
						
						
				</>
			))}
		</div>
	);
};
export default MealsList;
