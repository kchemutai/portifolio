import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
	return (
		<Container id="contact">
			<header>
				<h2>Contact</h2>
				<p>Ready to get in touch with me? </p>
				<p>Contact me now to have a quick chat.</p>
			</header>
			<div className="contacts">
				<div>
					<a href="mailto:kchemutai@gmail.com">
						<img src={emailIcon} alt="Email" />
					</a>
					<a href="mailto:Hello@vinayaksingh.com">kchemutai@gmail.com</a>
				</div>
				<div>
					<a href="tel:+16412339752">
						<img src={phoneIcon} alt="Phone No" />
					</a>
					<a href="tel:+16412339752">(+1) 6412339752</a>
				</div>
			</div>
			<Form></Form>
		</Container>
	);
}
