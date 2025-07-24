import NextSectionButton from '../NextSectionButton';

function About({ next_section }: { next_section: string }) {

    const frontendSkills = [
        'JavaScript / TypeScript',
        'React / Next.js',
        'HTML / CSS',
        'Tailwind CSS',
    ];

    const mobileSkills = [
        'Flutter',
        'React Native',
        'Android / Kotlin',
    ]

    const backendSkills = [
        "Java | Spring Boot",
        'Python | Flask | ML | AI | Automations,',
        "Sql | Complex queries | Optimizations",
    ];

    const languages = [
        'English - Advanced',
        'Portuguese - Native',
        'Spanish - Intermediate',
    ];

    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-30'>
            <div className='max-w-4xl mx-auto text-center px-4'>
                <h2 className='text-4xl md:text-6xl font-bold mb-6 text-app-gradient'>
                    About Me
                </h2>

                <NextSectionButton next_section={next_section} className='mt-5' />


                <div className="rounded-xl p-8">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with a love for crafting elegant solutions.
                        I thrive on challenges and enjoy turning complex problems into simple, beautiful code.
                        With a background in both front-end and back-end technologies, I bring a holistic approach to software development.
                        My journey in tech has been fueled by curiosity and a desire to create impactful applications.
                    </p>
                </div>

                <Skills
                    frontendSkills={frontendSkills}
                    backendSkills={backendSkills}
                    mobileSkills={mobileSkills}
                    languages={languages}
                />

                <h3 className="text-xl font-bold text-app-gradient mb-10 mt-10">Career</h3>

                <div className='mt-10'>
                    <Experience />

                    <Education />

                </div>


            </div>
        </section>
    )



}


function Education() {
    return (
        <div className='mb-10 mt-10 flex justify-center items-center'>
            <div className='w-sm p-10 bg-gray-800 rounded-xl shadow-lg shadow-hover hover:-translate-y-1 transition-all'>
                <h3 className="text-xl font-bold text-app-gradient mb-5">Education</h3>

                <p className="font-semibold text-gray-200">Bachelor's in Computer Science</p>
                <span className="text-gray-400"> @ Unip 2014 - 2018 (4y)</span>

                <div className="mt-8 mb-8">
                    <ul className="list-disc list-outside text-gray-300 space-y-2">
                        <li className='text-start'>Relevant Coursework: Data Structures, Database Management, Web Development, AI/ML algorithms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


function Experience() {
    return (
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 shadow-hover hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-app-gradient mb-5">Experience</h3>

            <p className="font-semibold text-gray-200">Sênior FullStack Developer</p>
            <span className="text-gray-400"> @ Exis Systems 2016 - Present (9y)</span>

            <div className="mb-4 flex items-start mt-5">
                <div>
                    <span className="text-gray-400">Tasks</span>

                    <ul className="list-disc list-outside text-gray-300 space-y-2 mt-4 ml-4">
                        <li className='text-start'>Develop and maintain web applications using React/Next.js, Spring Boot and SQL Server.</li>
                        <li className='text-start'>Develop and maintain android/cross-platform applications using Flutter / Android with kotlin</li>
                        <li className='text-start'>Train ML/AI models for data analysis and features with python</li>
                        <li className='text-start'>Implement security standarts and help members of the team to monitor for new threats</li>
                    </ul>
                </div>
                <div className="ml-6">
                    <span className="text-gray-400">Key collaborations</span>
                    <ul className="list-disc list-outside text-gray-300 space-y-2 mt-4 ml-4">
                        <li className='text-start'>Standardized the architecture of all mobile and web apps, increasing productivity and reducing development time.</li>
                        <li className='text-start'>Implemented a robust and automated testing culture, which reduced the delivery time of new features.</li>
                        <li className='text-start'>Modernized legacy and pure javascript web projects to Next.js, increasing efficiency, speed, and reducing errors.</li>
                        <li className='text-start'>Created an extensive library of reusable web and mobile components over time, reducing coupling with third-party libraries.</li>
                        <li className='text-start'>Automated massive data analysis with Python, eliminating the slow and manual process.</li>
                        <li className='text-start'>Trained AI models for automatic detection of fraud in electricity and gas accounts.</li>
                        <li className='text-start'>Optimized and modernize legacy Java systems, significantly improving performance and reducing clients complains.</li>
                        <li className='text-start'>Helped implement and test robust security standards across all company systems, preventing potential damage to data and infrastructure.</li>
                    </ul>

                </div>

            </div>
        </div>
    );
}


function Skills({
    frontendSkills,
    backendSkills,
    mobileSkills,
    languages,
}: {
    frontendSkills: string[];
    backendSkills: string[];
    mobileSkills: string[];
    languages: string[];
}) {
    return (

        <div>
            <h3 className="text-xl font-bold mb-4 text-app-gradient">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillsBox skills={frontendSkills} title='Frontend' />
                <SkillsBox skills={backendSkills} title='Backend' />
                <SkillsBox skills={mobileSkills} title='Mobile' />
                <SkillsBox skills={languages} title='Languages' />
            </div>

        </div>

    );
};

function SkillsBox({ skills, title }: { skills: string[], title: string }) {
    return (
        <div className="bg-gray-800 shadow-hover rounded-xl p-6 hover:-translate-y-1 transition-all max-w-sm mx-auto">
            <h3 className="text-xl font-bold mb-4 text-app-gradient">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="app-pill"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}


export default About
