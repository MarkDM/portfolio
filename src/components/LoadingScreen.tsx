import { useEffect, useState } from 'react'

function LoadingScreen({
    onComplete = () => { }
}) {

    const [text, setText] = useState('')
    const fullText = '<Hello World />';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;

            if (index >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500); // Delay before calling onComplete
            }

        }, 100);

        return () => clearInterval(interval);

    }, [onComplete]);


    return (
        <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
            <div className='mb-4 text-4xl font-mono font-bold'>
                {text}<span className='animate-blink ml-1'>|</span>

                <div className='w-full h-[4px] bg-gray-800 rounded relative overflow-hidden'>
                    <div className='w-full h-full bg-blue-500 shadow-[0_0_15px_#3b82f] animate-loading-bar'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
