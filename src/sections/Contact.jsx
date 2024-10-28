import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await emailjs.send("service_nccu8ue", "template_1r9ql1z", {
                from_name: form.name,
                to_name: "Nicolas",
                from_email: form.email,
                to_email: 'nmarinmunoz.pro@gmail.com',
                message: form.message
            },"YbUV-dQU9Mp_tjboD")
            setIsLoading(false)
            setForm({
                name:'',
                email:'',
                message:''
            })
            alert("Your message has been sent!")
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            alert("Something went wrong!")

        }

    }

    const isMobile = useMediaQuery({ maxWidth: 768 })
    return (
        <section className='c-space my-20'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {!isMobile ? (
                    <img src="/assets/terminal.png" alt="terminal background" className='absolute inste-0 min-h-screen' />

                ) : null}
                <div className='contact-container'>
                    <h3 className='head-text'>Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help
                    </p>
                    <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Nicolas Marin'
                        />
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='nmarinmunoz.pro@gmail.com'
                        />
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className='field-input'
                            placeholder="Hi, I'm interested in ..."
                        ></textarea>
                        <button className='field-btn' type='submit' disabled={isLoading}>
                            {isLoading ? 'Sending ...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up" className='field-btn_arrow' />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact