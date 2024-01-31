//icons
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
	return (
		<div className="flex items-center gap-x-5 text-2xl">
			<a
				target="_blank"
				href={'https://github.com/CaioRC'}
				className="hover:text-accent transition-all duration-300"
				rel="noopener noreferrer"
			>
				<RiGithubLine />
			</a>
			<a
				target="_blank"
				href={'https://www.linkedin.com/in/caiorc/'}
				className="hover:text-accent transition-all duration-300"
				rel="noopener noreferrer"
			>
				<RiLinkedinLine />
			</a>
		</div>
	);
};

export default Socials;
