import NextSectionButton from '../NextSectionButton'

function ProjectCard(props: {
    title: string,
    description: string,
    skills: string[],
    projectUrl: string
}) {
    return <div className='bg-gray-800 shadow-hover rounded-xl p-6 hover:-translate-y-1 transition-all max-w-sm mx-auto'>
        <h3 className='text-app-gradient font-semibold mb-5'>{props.title}</h3>
        <p>{props.description}</p>

        {
            props.projectUrl && <a
                href={props.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-block mt-4 text-blue-400 hover:text-blue-300 underline transition-colors"
            >
                View Project
            </a>
        }

        <h3 className='mt-5'>Skills</h3>

        <div className='flex flex-wrap gap-2 mt-3'>
            {props.skills.map((sk, i) => (
                <span key={i} className='app-pill'>{sk}</span>
            ))}
        </div>

    </div>
}


const projects = [
    {
        title: 'Cloud Platform',
        description: 'Scalable cloud infrastructure management with automated deployment, monitoring, and cost optimization tools.',
        skills: ['React', 'Node.js', 'AWS', 'Docker'],
        url: "https://www.google.com"
    },
    {
        title: 'Cloud Platform',
        description: 'Scalable cloud infrastructure management with automated deployment, monitoring, and cost optimization tools.',
        skills: ['React', 'Node.js', 'AWS', 'Docker'],
        url: ""

    },
    {
        title: 'Cloud Platform',
        description: 'Scalable cloud infrastructure management with automated deployment, monitoring, and cost optimization tools.',
        skills: ['React', 'Node.js', 'AWS', 'Docker'],
        url: ""

    }, {
        title: 'Cloud Platform',
        description: 'Scalable cloud infrastructure management with automated deployment, monitoring, and cost optimization tools.',
        skills: ['React', 'Node.js', 'AWS', 'Docker'],
        url: ""

    },
    // Add more projects here as needed
]

function Projects({ next_section }: { next_section: string }) {
    return (
        <section id='projects' className='min-h-screen items-center w-full py-30'>
            <div className='max-w-5xl mx-auto px-4'>
                <h2 className='text-4xl md:text-6xl font-bold mb-6 text-app-gradient text-center'>
                    Featured Projects
                </h2>
                <NextSectionButton next_section={next_section} className='my-5' />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                            projectUrl={project.url}

                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
