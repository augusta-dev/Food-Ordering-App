import ReactDOM from "react-dom";
const Backdrop = (props) => {
	return (
		<div
			className={
				"fixed backdrop-xl h-screen w-screen bg-white/70 backdrop-blur-md backdrop-opacity-100 z-10"
			}
		></div>
	);
};
const ModalOverlay = (props) => {
	return <Modal className="fixed z-10 top-0 left-0 right-0 bottom-0 mx-auto self-center align-middle my-auto"><div className="h-auto">{props.children}
        </div></Modal>;
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				portalElement,
			)}
		</>
	);
};
export default Modal;
