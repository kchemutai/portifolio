import { Container } from "./styles";
import KevinChemutai from "../../assets/profile_final.png";
import springBoot from "../../assets/spring-icon-svgrepo-com.svg";
import flask from "../../assets/pocoo_flask-ar21.svg";
import aws from "../../assets/aws-icon.svg";
import gcp from "../../assets/google-cloud.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import angular from "../../assets/angular.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
	return (
		<Container id="about">
			<div className="about-text">
				<ScrollAnimation animateIn="fadeInLeft">
					<h2>About me</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
					<p>
						Hi there! I'm Kevin, a Software Engineer with a passion for creating
						software solutions that tranform the world. With a skill set including
						fronend languages HTML, CSS, JavaScript, React, Angular, backend languages
						Java and Python, I have the tools to bring any Web Development ideas to
						life.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.2 * 1000}
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
				>
					<p>
						But my services go beyond just development - I'm also proficient in using
						Automation tools and Cloud Technologies like Jenkins, AWS and GCP making
						it easy for deployments and cost saving by taking advantage of on demand
						delivery of compute power & storage.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
					<p>
						So if you're in need of a Software Engineer to help to digitalize your
						current business workflows in a cost effective manner and boost online
						presence, I'd love to chat and see how I can help. Let's bring your dreams
						to reality together!
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
					<h3>Here are my main skills:</h3>
				</ScrollAnimation>
				<div className="hard-skills">
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
							<img src={springBoot} alt="Spring Boot" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
							<img src={flask} alt="flask" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
							<img src={reactIcon} alt="React" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
							<img src={typescriptIcon} alt="Typescript" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
							<img src={angular} alt="Angular" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
							<img src={nodeIcon} alt="Node" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
							<img src={htmlIcon} alt="Html" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
							<img src={cssIcon} alt="Css" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
							<img src={boostrapIcon} alt="bootstrap" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
							<img src={jsIcon} alt="JavaScript" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
							<img src={aws} alt="AWS" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
							<img src={gcp} alt="GCP" />
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className="about-image">
				<ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
					<img src={KevinChemutai} alt="Vinayak Singh" />
				</ScrollAnimation>
			</div>
		</Container>
	);
}
