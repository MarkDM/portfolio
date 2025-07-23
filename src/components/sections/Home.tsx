import NextSectionButton from '../NextSectionButton'

function Home({ next_section }: { next_section: string }) {
    return (
        <section id='home'
            className='min-h-screen flex items-center justify-center relative'
        >
            <div className='text-center z-10 px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 text-app-gradient bg-clip-text text-transparent leading-tight'>
                    Hi, i'm Marcos Douglas
                </h1>

                <p className='text-gray-200 tex-lg mb-8 max-w-lg mx-auto'>
                    I'm a Full Stack Developer with a passion for creating beautiful and functional web applications.
                    I specialize in React, Node.js, and modern web technologies.
                </p>

                <div className='flex justify-center gap-4'>
                    <a href="#projects" className='bg-primary shadow-hover text-white font-semibold py-2 px-4 rounded hover:-translate-y-1 transition duration-300'>
                        View Projects
                    </a>
                    <a href="#contact" className='bg-gray-700 shadow-hover text-white font-semibold py-2 px-4 rounded hover:-translate-y-1 transition duration-300'>
                        Contact Me
                    </a>
                </div>

                <NextSectionButton next_section={next_section} className='mt-12' />

                <div className='absolute pointer-events-none inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg'></div>

            </div>
        </section>
    )
}

export default Home
