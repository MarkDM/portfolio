import React, { useState } from 'react'
import emailjs, { send } from 'emailjs-com'


function Contact({ next_section }: { next_section?: string }) {

    const [sendingMessage, setSendingMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

        setSendingMessage(true);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY);
            setFormData({ name: "", email: "", message: "" });
            alert("Message Sent!");
        } catch (err) {
            console.error(err);
            alert("Oops! Something went wrong. Please try again");
        } finally {
            setSendingMessage(false);
        }
    }

    return (
        <section id="contact" className='min-h-screen flex items-center justify-center p-y-20'>
            <div className='px-4 w-150'>
                <h2 className='text-4xl md:text-6xl font-bold mb-6 text-app-gradient text-center'>Get In Touch</h2>
                <form className='space-y-6' onSubmit={handleSubmit}
                >
                    <div className='relative'>
                        {/* <label htmlFor='name'>Name</label> */}
                        <input
                            className='input shadow-hover'
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                            }}
                            placeholder='Name...'
                            type='text'
                            name="name"
                            id="name"
                            // autoComplete='off'
                            required
                            autoCorrect='off'
                            spellCheck={false}
                        />
                    </div>

                    <div className='relative'>
                        <input
                            className='input shadow-hover'
                            placeholder='example@gmail.com'
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value })
                            }}
                            type='text'
                            name="email"
                            id="email"
                            // autoComplete='off'
                            required
                            autoCorrect='off'
                            spellCheck={false}
                        />
                    </div>

                    <div className='relative'>
                        <textarea value={formData.message}
                            onChange={(e) => {
                                setFormData({ ...formData, message: e.target.value })
                            }}
                            className='input shadow-hover font-medium relative'
                            placeholder='Your message...'
                            name="message"
                            id="message"
                            rows={5}
                            maxLength={500} />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary shadow-hover text-white font-semibold py-2 px-4 rounded hover:-translate-y-1 w-full transition duration-300 cursor-pointer flex items-center justify-center'
                        disabled={sendingMessage}
                    >
                        Send Message
                        {sendingMessage && (
                            <span className="ml-2 animate-spin rounded-full border-2 border-white border-t-transparent w-5 h-5 inline-block align-middle"></span>
                        )}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
