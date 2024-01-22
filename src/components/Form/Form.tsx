import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
	const [state, handleSubmit] = useForm("xknkpqry");

	const [validEmail, setValidEmail] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [validPhone, setValidPhone] = useState(false);
	const [validName, setValidName] = useState(false);
	const [validTitle, setValidTitle] = useState(false);
	const [isHuman, setIsHuman] = useState(false);
	const [message, setMessage] = useState("");

	function verifyEmail(email: string) {
		if (validator.isEmail(email)) {
			setValidEmail(true);
		} else {
			setValidEmail(false);
		}
	}
	function verifyTitle(title: string) {
		if (title != null || title != "") {
			setValidTitle(true);
		} else {
			setValidTitle(false);
		}
	}

	function verifyPhone(phone: string) {
		setPhoneNumber(phone);

		// Check if the phone number is not empty before applying regex
		if (phone.trim() !== "") {
			// Regular expression for a basic phone number pattern
			const phoneRegex = /^\d{10}$/;

			// Check if the entered phone number matches the pattern
			setValidPhone(phoneRegex.test(phone));
		} else {
			// If phone number is empty, consider it valid (optional)
			setValidPhone(true);
		}
	}
	function verifyName(title: string) {
		if (title != null || title != "") {
			setValidName(true);
		} else {
			setValidName(false);
		}
	}

	useEffect(() => {
		if (state.succeeded) {
			toast.success("Email successfully sent!", {
				position: toast.POSITION.BOTTOM_LEFT,
				pauseOnFocusLoss: false,
				closeOnClick: true,
				hideProgressBar: false,
				toastId: "succeeded",
			});
		}
	});
	if (state.succeeded) {
		return (
			<ContainerSucces>
				<h3>Thanks for getting in touch!</h3>
				<button
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Back to the top
				</button>
				<ToastContainer />
			</ContainerSucces>
		);
	}

	return (
		<Container>
			<h2>Get in touch using the form</h2>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Email"
					id="email"
					type="email"
					name="email"
					onChange={(e) => {
						verifyEmail(e.target.value);
					}}
					required
				/>
				<input
					placeholder="Title"
					id="title"
					type="text"
					name="title"
					onChange={(e) => {
						verifyTitle(e.target.value);
					}}
					required
				/>
				<input
					placeholder="Name"
					id="name"
					type="text"
					name="name"
					onChange={(e) => {
						verifyName(e.target.value);
					}}
					required
				/>
				<input
					placeholder="Phone - Optional"
					id="phone"
					type="number"
					name="phone"
					onChange={(e) => {
						verifyPhone(e.target.value);
					}}
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
				<textarea
					required
					placeholder="Send a message to get started."
					id="message"
					name="message"
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
				<ValidationError prefix="Message" field="message" errors={state.errors} />
				<button
					type="submit"
					disabled={
						state.submitting ||
						!validEmail ||
						!message ||
						!validTitle ||
						!validName ||
						!validPhone
					}
				>
					Submit
				</button>
			</form>
			<ToastContainer />
		</Container>
	);
}
