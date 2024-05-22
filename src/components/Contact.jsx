import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import {resume} from '../assets';

//template_h1et77f
//service_eppjck4
//oXV93PbP0Xp0tHONS

const Contact = () => {

  const formRef = useRef();

  const [form,setForm] = useState ({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_eppjck4',
      'template_h1et77f',
      {
        from_name:form.name, 
        to_name:"Xirui",
        from_email: form.email,
        to_email: 'xrhuang10@gmail.com',
        message:form.message,
      },
      'oXV93PbP0Xp0tHONS')

      .then(() => {
        setLoading(false);
        alert('Thank you for your message. I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong, please try again.')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl">

        <p className={styles.sectionSubText}>
          Get in touch &#128233;
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact Me.
        </h3>
          <a href="https://github.com/xrhuang10" target="_blank">
            <button         
              className="mt-2 bg-[#444] py-3 px-3 mr-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-full">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496" >
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    
                  </span>
            </button>
          </a>
          <a href="https://linkedin.com/xirui-huang-95475b221/" target="_blank">
            <button className="mt-2 bg-[#0077b5] py-3 px-3 mr-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-full">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
            </button>
          </a>
          <a href={resume} download="Xirui Huang - Resume">
            <button className="mt-2 bg-[#d81e5b] py-3.5 px-3.5 mr-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

            </button>
          </a>
            


        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="What's your name?"
                className="bg-white-100 py-4 px-6 placeholder:text-[#d81e5b] text-black rounded-lg outlined-none border-none font-medium"/>
                
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="What's your email?"
                className="bg-white py-4 px-6 placeholder:text-[#d81e5b] text-black rounded-lg outlined-none border-none font-medium"/>
                
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea 
                rows="7" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                placeholder="What do you want to say?"
                className="bg-white py-4 px-6 placeholder:text-[#d81e5b] text-black rounded-lg outlined-none border-none font-medium"/>
                 
            </label>
            <button type="submit"
              className="bg-[#d81e5b] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                {loading ? 'Sending Message...' : 'Send'}
            </button>
        </form>

      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")