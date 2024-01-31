// data
const projectsSlides = {
	slides: [
		{
			projects: [
				{
					title: 'beautysalon.',
					path: '/beautysalon.png',
					description:
						'Uma landing page para um salão de beleza, destacando serviços, equipe e informações essenciais',
					tags: ['HTML5', 'CSS3', 'Javascript', 'Swiper'],
					github: 'https://github.com/CaioRC/beautysaloonPort',
					live: 'https://caiorc.github.io/beautysaloonPort/'
				},
				{
					title: 'dolla',
					path: '/dolla.png',
					description:
						'Um site institucional para um banco virtual, destacando serviços e informações essenciais',
					tags: ['ReactJs', 'Vite', 'React-Scroll', 'Styled-Components'],
					github: 'https://github.com/CaioRC/dolla_website',
					live: 'https://caiorc.github.io/dolla_website/'
				}
			]
		},
		{
			projects: [
				{
					title: 'pokedex',
					path: '/pokedex.png',
					description:
						'Um website sobre a pokedex do Pokémon feito de forma bem rápida',
					tags: ['ReactJs', 'Styled-Components', 'React Query'],
					github: 'https://github.com/CaioRC/PokeDex',
					live: 'https://caiorc.github.io/PokeDex/'
				}
			]
		}
	]
};

// image next
import Image from 'next/image';

//components
import Badge from './Badge';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

//icons
import { RiGithubLine } from 'react-icons/ri';
import { RxArrowTopRight } from 'react-icons/rx';

const ProjectsSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true
			}}
			modules={[Pagination]}
			className="h-[400px] sm:h-[480px] z-50"
		>
			{projectsSlides.slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className="h-[360px] sm:h-[400px] grid grid-cols-2 grid-rows-1 gap-4 text-white/60">
						{slide.projects.map((project, index) => (
							<div
								key={'Image' + index}
								className="relative rounded-lg overflow-hidden flex flex-col justify-between"
							>
								{/* image */}
								<a
									target="_blank"
									href={project.live}
									rel="noopener noreferrer"
									className="relative w-full h-[40%] transition-all duration-300 hover:scale-110  cursor-pointer"
								>
									<Image src={project.path} fill alt="" />
								</a>
								{/* title */}
								<div className="text-white font-bold text-xl md:text-2xl">
									{project.title}
								</div>
								{/* description */}
								<div className="hidden md:flex text-sm">
									{project.description}
								</div>
								{/* tags */}
								<div className="flex flex-wrap md:justify-normal text-xs md:text-sm gap-1 md:gap-2 ">
									{project.tags?.map((tag, index) => (
										<Badge key={index} text={tag} />
									))}
								</div>

								<div className="flex flex-wrap gap-1 text-base text-white">
									<a
										target="_blank"
										href={project.github}
										rel="noopener noreferrer"
										className="inline-flex gap-x-1 items-center justify-center h-9 mr-3 px-3 font-medium text-nowrap bg-transparent border-2 border-gray-200 rounded-lg  hover:text-accent hover:border-accent cursor-pointer"
									>
										<RiGithubLine />
										Código-fonte
									</a>
									<a
										target="_blank"
										href={project.live}
										rel="noopener noreferrer"
										className="inline-flex gap-x-1 items-center justify-center h-9 mr-3 px-3 font-medium bg-transparent border-2 border-gray-200 rounded-lg hover:text-accent hover:border-accent  cursor-pointer"
									>
										Website
										<RxArrowTopRight />
									</a>
								</div>
							</div>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProjectsSlider;
