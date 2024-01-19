import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
	return (
		<Container className="footer">
			<a href="https://vinayaksingh.in" className="logo">
				<span>www.kevin</span>
				<span>chemutai.com</span>
			</a>
			<div>
				<p>
					This Website was made with <img src={reactIcon} alt="React" />
					{/* <span>❤️</span> */}
				</p>
			</div>

			<div className="social-media">
				<a
					href="https://www.linkedin.com/in/kevinchemutai"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedin} alt="Linkedin" />
				</a>
				<a href="https://github.com/kchemutai/" target="_blank" rel="noreferrer">
					<img src={githubIcon} alt="GitHub" />
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=%2B641239752&text=Hello+Kevin"
					target="_blank"
					rel="noreferrer"
				>
					<img src={whatsapp} alt="Whatsapp" />
				</a>
				<a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
					<img src={telegram} alt="telegram" />
				</a>
				<a
					href="https://www.instagram.com/kchemutai"
					target="_blank"
					rel="noreferrer"
				>
					<img src={instagramIcon} alt="Instagram" />
				</a>
			</div>
		</Container>
	);
}
