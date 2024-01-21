import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import DownloadApp from "../../assets/download.png";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
	return (
		<Container id="project">
			<h2>My Projects</h2>
			<div className="projects">
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className="project-links">
								<a href="https://fenixdb.com" target="_blank" rel="noreferrer">
									<img src={externalLink} alt="Visit site" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>
								FenixDB - A database CRM for managing operations of fenix international
							</h3>
							<p>
								This database that manages customer information, tracks customer payment
								data, performing inventory, HR, logistics, ticketing and device tracking
								among others. Its main function is to receive payments from payment
								providers and credit customer accounts, maintain financial data and its
								operations.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Java/Spring Boot</li>
								<li>Python</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className="project-links">
								<a href="https://xdesk.fenixdb.com" target="_blank" rel="noreferrer">
									<img src={externalLink} alt="Visit site" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>xDesk - Soft Phone and ticketing site</h3>
							<p>
								This web application provides a soft phone interface for making and
								recieveing calls and an interface for ticketing data. It is a CRM that
								integrates with an ERP to fetch customer information for call center
								agents to provide the best possible customer service to engie customers
								over the phone.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Java/Spring Boot</li>
								<li>Angular</li>
								<li>Python</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className="project-links">
								<a
									href="https://kchemutai.github.io/fenix-dash/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit site" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Cloud 9 Dashboard - Dashboard for Contact Center Data</h3>
							<p>
								This an application that tracks real time statics, current performance
								metrics of call center agents, and most importatntly current call center
								performance statics. It is used by call center management and agents to
								respond to growing demand by customers on the phone lines and provide an
								exceptional customer service.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>React</li>
								<li>Bootstrap</li>
								<li>Axios</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className="project-links">
								<a
									href="https://github.com/kchemutai/spring-microservices-project"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit site" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Spring Boot Microservices Customer App</h3>
							<p>
								This is a spring boot microservice project that enables customers to
								sign up for accounts, track fradulent customers and sends notifications.
								It uses spring boot microservice, service discouvery, rabbitMQ
								messaging, docker, kubernetes.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Java Spring Boot</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
