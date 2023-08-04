const Title = (props) => {
	return (
		<div
			className={` ${props.className}  p-2.5 justify-around items-center  gap-[-77px] inline-flex`}
		>
			<div className="flex-col justify-center items-center inline-flex font-rasa">
				<div className="text-white text-8xl font-normal -mb-10">
					The Best Homecooked Meals
				</div>
				<div className="text-zinc-300 text-[64px] font-normal font-cormorant">
					Get the result without the effort
				</div>
			</div>
		</div>
	);
};
export default Title;
