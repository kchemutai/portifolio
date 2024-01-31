import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
	const [state, handleSubmit] = useForm("xknkpqry");

	const [validEmail, setValidEmail] = useState(false);
	const [validPhone, setValidPhone] = useState(false);
	const [validName, setValidName] = useState(false);
	const [validTitle, setValidTitle] = useState(false);
	const [message, setMessage] = useState("");

	//update values

	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");

	function verifyEmail(email: string) {
		if (validator.isEmail(email)) {
			setValidEmail(true);
			setEmail(email);
		} else {
			setValidEmail(false);
		}
	}
	function verifyTitle(title: string) {
		if (title != null || title !== "") {
			setValidTitle(true);
			setTitle(title);
		} else {
			setValidTitle(false);
		}
	}

	function verifyPhone(phone: string) {
		// Check if the phone number is not empty before applying regex
		if (phone.trim() !== "") {
			// Regular expression for a basic phone number pattern
			const phoneRegex = /^\d{10}$/;

			// Check if the entered phone number matches the pattern
			setValidPhone(phoneRegex.test(phone));
			setPhone(phone);
		} else {
			// If phone number is empty, consider it valid (optional)
			setValidPhone(true);
		}
	}
	function verifyName(name: string) {
		if (name != null || name !== "") {
			setValidName(true);
			setName(name);
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

	async function handleApiCall(data: any) {
		try {
			// Make your API call using data
			const response = await fetch(
				"https://v0bgk6d2o1.execute-api.us-east-1.amazonaws.com/V1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				// Handle successful API response, e.g., show success message
				console.log("API call successful");
			} else {
				// Handle API error, e.g., show error message
				console.error("API call failed");
			}
		} catch (error) {
			console.error("API call error:", error);
		}
	}
	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (validEmail && validTitle && validName && message && validPhone) {
			// If validations pass, make the API call
			const formData = {
				email: email,
				title: title,
				name: name,
				phone: phone,
				message,
			};

			await handleApiCall(formData);
			// Continue with the form submission if needed
			handleSubmit(e);
		} else {
			// If validations fail, show an error message or handle accordingly
			console.error("Form validation failed");
		}
	};
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
			<form onSubmit={handleFormSubmit}>
				<input
					placeholder="Email"
					id="email"
					type="email"
					name="email"
					value={email}
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
					value={title}
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
					value={name}
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
					value={phone}
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
					value={message}
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
