// import React from "react";
import React, { useRef } from 'react';
import contact from '../Assets/Styles/contact.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger} from "react-icons/bs";
import emailjs from 'emailjs-com'

 const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fu0e95l', 'template_gdjxp6g', form.current, 'KfGVyjhX_IvddnHea')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
   return (
     <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       
       <div className="container contact_container">
         <div className="contact_options">
           <article className="contact_option">
           <AiOutlineMail className='contact_option-icon '/>
            <h4>Email</h4>
            <a href="mailto: eddarlostudy@yahoo.com">Send Message</a>
           </article>
           <article className="contact_option">
           <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <a target="_blank" rel="noreferrer" href="https://m.me/eddarlo.garcia">Send Message</a>
           </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="text" name='email' placeholder='Your Email' required />
           <textarea name="message" rows="4" placeholder="Your Message" required ></textarea>
           <button type='submit' className="btn btn-primary">Send Message</button>
         </form>
       </div>
      </section>
   )
 }

 export default Contact;


