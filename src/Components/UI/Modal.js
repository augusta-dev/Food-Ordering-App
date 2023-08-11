import ReactDOM from "react-dom";
const Backdrop = (props) => {
	return (
		<div
			className={
				"fixed backdrop-xl h-screen w-screen bg-white/70 backdrop-blur-md backdrop-opacity-100 z-10"
			}
			onClick={props.onClick}
		></div>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className="fixed z-10 top-0 left-0 right-0 bottom-0 mx-auto self-center align-middle my-auto overflow-y-auto">
			<div className="h-auto relative mx-auto">{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	const closeModal = () => {
		props.onClose();
	}
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={closeModal} />,
				portalElement,
			)}
			{ReactDOM.createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				portalElement,
			)}
		</>
	);
};
export default Modal;
