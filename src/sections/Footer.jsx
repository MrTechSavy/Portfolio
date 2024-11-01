import React from 'react'

const Footer = () => {
  return (
    <footer className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & conditions</p>
            <p></p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div className="social-icon">
                <a href="https://github.com/MrTechSavy" target='_blank' className='flex justify-center'>
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h1/2'/>
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/nicolas-marin-848449156/" target='_blank' className='flex justify-center'>
                    <img src="/assets/linkdin.svg" alt="linkdin" className='w-1/2 h1/2'/>
                </a>
            </div>
        </div>

        <p className='text-white-500'>
            © 2024 Nicolas Marin. All rights reserved
        </p>
    </footer>
  )
}

export default Footer