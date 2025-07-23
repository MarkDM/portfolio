import { type CSSProperties } from 'react'

interface NextSectionButtonProps {
    next_section: string
    style?: CSSProperties
    className?: string
}

function NextSectionButton({ next_section, style, className }: NextSectionButtonProps) {
    return (
        <a href={next_section} className={`mx-auto w-0 flex justify-center ${className ?? ''}`} style={style}>
            <div className="relative flex flex-col items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full bg-primary opacity-30"></span>
                <span className="animate-pulse absolute w-18 h-18 rounded-full bg-primary opacity-20"></span>
                <svg
                    className="relative z-10 w-10 h-10 text-secondary/70 hover:text-secondary transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </a>
    )
}

export default NextSectionButton
