const IndividualMeals = (props) => {
	return (
		<div className={`${props.className} flex flex-wrap justify-between px-9 py-4`}>
			<div justify="start">
				<h2 className="font-rasa text-black text-6xl -mb-3">{props.name}</h2>
				<p className="font-cormorant text-black font-light text-5xl italic">
					{props.ingredients}
				</p>
				<p className="text-red-500 text-5xl font-light font-rasa ">
					${props.price}
				</p>
			</div>
			<div justify="end" className=" flex items-center">
                <div></div>
				<p>Amount</p>
			</div>
		</div>
	);
};
export default IndividualMeals;
