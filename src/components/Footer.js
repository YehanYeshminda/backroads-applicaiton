import { PageLinks, SocialLinks } from '../data';

const Footer = () => {
	return (
		<footer className="section footer">
			<ul className="footer-links">
				{PageLinks.map((links) => {
					const { href, id, text } = links;

					return (
						<li key={id}>
							<a
								href={href}
								className="footer-link"
							>
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="footer-icons">
				{SocialLinks.map((links) => {
					const { href, icon, id } = links;

					return (
						<li key={id}>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="footer-icon"
							>
								<i className={icon}></i>
							</a>
						</li>
					);
				})}
			</ul>
			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date">{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
};

export default Footer;
