import IndividualMeals from "./IndividualMeals";
import lahmacun from "../../Assets/200402101927-18-best-turkish-foods-lahmacun.jpg";
import lasagne from "../../Assets/Homemade-Ground-Beef-Lasagna-1.png";
import friedRice from "../../Assets/IMG_0646.png"
const MealsList = () => {
	const Meals = [
		{
			name: "Classic Beef Lasagne",
			ingredients: "Lasagne sheets and beef",
			price: 22.99,
			id:'m1',
			image: lasagne
		},
		{
			name: "Fried Rice",
			ingredients: "Rice, chicken and vegetables",
			price: 22.99,
			id:'m2',
			image: friedRice,
		},
		{
			name: "Lahmacun",
			ingredients: "Flour, beef and vegetables",
			price: 22.99,
			id:'m3',
			image: lahmacun,
		},
	];
	return (
		<div className="w-full rounded-3xl grid gap-9 grid-cols-3 pt-7">
			{Meals.map((meal, index) => (
				
				<>
					<IndividualMeals
						name={meal.name}
						ingredients={meal.ingredients}
						price={meal.price}
                        className="w-full"
						key={meal.id}
						id={meal.id}
						image={meal.image}
					/>
					{/* { index !== Meals.length - 1 ? (<div className="w-full h-px bg-black" />) : null } */}
						
						
				</>
			))}
		</div>
	);
};
export default MealsList;
