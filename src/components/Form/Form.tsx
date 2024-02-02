import { Container, ContainerSucces } from "./styles";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
	const [state, handleSubmit] = useForm("xknkpqry");

	const [validEmail, setValidEmail] = useState(false);
	const [validPhone, setValidPhone] = useState(false);
	const [validName, setValidName] = useState(false);
	const [validTitle, setValidTitle] = useState(false);
	const [validMessage, setValidMessage] = useState(false);

	//update values

	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

	// Error messages for each input
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [nameError, setNameError] = useState("");
	const [titleError, setTitleError] = useState("");
	const [messageError, setMessageError] = useState("");

	//API
	const [apiSuccess, setApiSuccess] = useState(false);
	const [apiError, setApiError] = useState(false);

	//loading api call
	const [loading, setLoading] = useState(false);

	function verifyEmail(email: string) {
		if (validator.isEmail(email)) {
			setEmail(email);
			setValidEmail(true);
			setEmailError("");
		} else {
			setValidEmail(false);
			setEmailError("Invalid email address");
		}
	}
	function verifyTitle(title: string) {
		if (title.trim() !== "") {
			setValidTitle(true);
			setTitle(title);
			setTitleError("");
		} else {
			setValidTitle(false);
			setTitleError("Title cannot be empty");
		}
	}

	function verifyPhone(phone: string) {
		// Check if the phone number is not empty before applying regex
		if (phone.trim() !== "") {
			// Regular expression for a basic phone number pattern
			const phoneRegex = /^\d{10}$/;

			// Check if the entered phone number matches the pattern
			if (phoneRegex.test(phone)) {
				setValidPhone(true);
				setPhoneError("");
			} else {
				setValidPhone(false);
				setPhoneError("Invalid phone number");
			}
			setPhone(phone);
		} else {
			// If phone number is empty, consider it valid (optional)
			setValidPhone(true);
			setPhoneError("");
		}
	}
	function verifyName(name: string) {
		if (name.trim() !== "") {
			setValidName(true);
			setName(name);
			setNameError("");
		} else {
			setValidName(false);
			setNameError("Name cannot be empty");
		}
	}
	function verifyMessage(name: string) {
		if (name.trim() !== "") {
			setValidMessage(true);
			setMessage(name);
			setMessageError("");
		} else {
			setValidMessage(false);
			setMessageError("Message cannot be empty");
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
				setApiSuccess(true);
				setApiError(false);
				console.log("API call successful");
			} else {
				// Handle API error, e.g., show error message
				setApiSuccess(false);
				setApiError(true);
				console.error("API call failed");
			}
		} catch (error) {
			setApiSuccess(false);
			setApiError(true);
			console.error("API call error:", error);
		}
	}
	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (validEmail && validTitle && validName && message && validPhone) {
			setLoading(true);
			// If validations pass, make the API call
			const formData = {
				email: email,
				title: title,
				name: name,
				phone: phone,
				message,
			};

			await handleApiCall(formData);

			// Clear form fields after successful submission
			if (apiSuccess) {
				setEmail("");
				setTitle("");
				setName("");
				setPhone("");
				setMessage("");
			}

			// Continue with the form submission if needed
			handleSubmit(e);
		} else {
			// If validations fail, show an error message or handle accordingly
			console.error("Form validation failed");
		}
	};

	// return (

	// Update the return statement to display success or error messages
	if (apiSuccess) {
		return (
			<ContainerSucces>
				<br></br>
				<br></br>
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
	} else if (apiError) {
		return (
			<Container>
				<h2>Error submitting the form. Please try again later.</h2>
				<br></br>
				<br></br>
				<button
					onClick={() => {
						window.location.reload(); // Reload the page to reset the form
					}}
				>
					Try Again
				</button>
				<ToastContainer />
			</Container>
		);
	} else {
		// Render the form if the API call is still in progress or hasn't been made yet
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
					{validEmail || !email ? null : (
						<div className="error" style={{ color: "red" }}>
							{emailError}
						</div>
					)}
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
					{validTitle || !title ? null : (
						<div className="error" style={{ color: "red" }}>
							{titleError}
						</div>
					)}
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
					{validName || !name ? null : (
						<div className="error" style={{ color: "red" }}>
							{nameError}
						</div>
					)}
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
					{validPhone || !phone ? null : (
						<div className="error" style={{ color: "red" }}>
							{phoneError}
						</div>
					)}
					<textarea
						required
						placeholder="Send a message to get started."
						id="message"
						name="message"
						value={message}
						onChange={(e) => {
							verifyMessage(e.target.value);
						}}
					/>
					{validMessage || !message ? null : (
						<div className="error" style={{ color: "red" }}>
							{messageError}
						</div>
					)}
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
}
