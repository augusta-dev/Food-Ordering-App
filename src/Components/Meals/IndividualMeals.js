const IndividualMeals = (props) => {
	return (
		<div className={`${props.className} flex flex-wrap justify-between px-9 py-4`}>
			<div justify="start">
				<h2 className="font-rasa text-black text-5xl leading-10">{props.name}</h2>
				<p className="font-cormorantItalic text-black font-light text-4xl leading-8">
					{props.ingredients}
				</p>
				<p className="text-red-500 text-4xl font-light font-rasa leading-10">
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
