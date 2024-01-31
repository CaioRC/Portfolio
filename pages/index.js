//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Typewriter from 'typewriter-effect';

//frame motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			{/* {text} */}
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
					{/* {title} */}
					<motion.h1
						variants={fadeIn('down', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 xl:h1"
					>
						Desenvolvendo aplicações <br /> Em{' '}
						<Typewriter
							options={{
								strings: ['React.', 'NextJs.', 'React Native'],
								autoStart: true,
								loop: true,
								wrapperClassName: 'text-accent',
								cursorClassName: 'text-accent',
								pauseFor: 2000
							}}
						/>
						{/* <span className="text-accent">Digital Reality</span> */}
					</motion.h1>
					{/* {subtitle} */}
					<motion.p
						variants={fadeIn('down', 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
					>
						Bem-vindo ao meu portfólio! Sou Caio Rodrigues Costa. Aqui, você
						conhecerá um pouco mais sobre mim e encontrará uma coleção dos meus
						projetos pessoais, cada um refletindo minha habilidade e
						dedicação.&nbsp;
						<br /> Agradeço por visitar meu portfólio. Espero que aproveite a
						experiência!
					</motion.p>
					{/* {btn} */}
					<div className="flex justify-center xl:hidden relative z-10">
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn('down', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden xl:flex z-10"
					>
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* {image} */}
			<div className="w-[1200px] h-full bg-transparent absolute right-0 bottom-0">
				{/* {bg img} */}
				<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
				{/* {particles} */}
				<ParticlesContainer />
			</div>
		</div>
	);
};

export default Home;
