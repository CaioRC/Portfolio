import React, { useState } from 'react';

//  data
const aboutData = [
	{
		title: 'habilidades',
		info: [
			{
				title: 'Front-End',
				tags: [
					'HTML5',
					'CSS3',
					'Javascript',
					'Typescript',
					'React',
					'React Testing Library',
					'NextJs',
					'Responsive Design'
				]
			},
			{
				title: 'Back-End',
				tags: ['NodeJs', 'C#', '.Net Core']
			},
			{
				title: 'Diversos',
				tags: [
					'Git',
					'Docker',
					'Clean Architecture',
					'TailwindCss',
					'Styled-Components',
					'MUI',
					'Redux',
					'Frame-Motion'
				]
			}
		]
	},
	{
		title: 'experiência',
		info: [
			{
				title: 'Desenvolvedor Full-Stack • LSBD',
				stage: '2021 - 2023'
			},
			{
				title: 'Estagiário de Desenvolvimento Web • LSBD',
				stage: '2021'
			}
		]
	},
	{
		title: 'formação',
		info: [
			{
				title: 'Bacharelado em Ciencia da Computação - UFC',
				stage: '2016-2021'
			}
		]
	},
	{
		title: 'cursos',
		info: [
			{
				title: 'Produtividade e Perfomance - Conquer Business School',
				stage: '2024'
			}
		]
	}
];

//components
import Circles from '../../components/Circles';
import Badge from '../../components/Badge';

//frame motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
	const [index, setIndex] = useState(0);
	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
				{/* {text} */}
				<div className="flex-1 flex flex-col justify-center ">
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2"
					>
						Sobre <span className="text-accent">mim.</span>
					</motion.h2>
					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-sm md:text-base max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
					>
						Residente em Fortaleza, Ceará, Brasil, sou bacharel em Ciência da
						Computação pela UFC, com 8 anos dedicados à área de TI. Tenho
						especial interesse no desenvolvimento de interfaces perfomaticas,
						pixel-perfect e com qualidade. Além disso, mantenho um estilo de
						vida equilibrado, com foco em práticas saudáveis e na busca contínua
						por aprimoramento profissional.
					</motion.p>
					{/* {counters} */}
					<motion.div
						variants={fadeIn('right', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden md:flex md:max-w-xl xl max-w-none mx-auto xl:mx-0 mb-8"
					>
						<div className="flex flex-1 xl:gap-x-6">
							{/* {experience} */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={3} duration={6} /> +
								</div>
								<div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Anos de experiência
								</div>
							</div>
							{/* work projects */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={6} /> +
								</div>
								<div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									projetos professionais participados
								</div>
							</div>
							{/* {projects} */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={6} duration={6} /> +
								</div>
								<div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									projetos pessoais finalizados
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* {info} */}
				<motion.div
					variants={fadeIn('left', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
				>
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className={`${
									index === itemIndex
										? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
										: 'after:w-8 after:bg-white '
								} cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
								onClick={() => setIndex(itemIndex)}
							>
								{item.title}
							</div>
						))}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
							>
								{/* {title} */}
								<div className="font-light text-wrap mb-2 md:mb-0">
									{item.title}
								</div>
								<div className="hidden md:flex">-</div>
								<div>{item.stage}</div>
								<div className="flex flex-wrap justify-center md:justify-normal text-xs md:text-sm gap-1 md:gap-2">
									{/* {tags} */}
									{item.tags?.map((tag, tagIndex) => (
										<Badge key={tagIndex} text={tag} />
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
