const Heading = (props) => {
	return (
		<div className={`${props.className} flex flex-wrap justify-center items-center w-full align-middle`}>
			<div className="mt-14 mb-14 flex flex-wrap align-middle justify-center w-full px-16 rounded-3xl ">
				<h1 className="text-black text-8xl font-normal font-rasa pt-10 pb-1">
					{props.heading}
				</h1>
				{props.children}
			</div>
		</div>
	);
};
export default Heading;
