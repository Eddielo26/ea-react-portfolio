// import React from "react";
import React, { useRef } from 'react';
import contact from '../Assets/Styles/contact.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger} from "react-icons/bs";
import emailjs from 'emailjs-com'
// import { validateEmail } from "../utils/helpers";
// import {ContactSection, Form} from "../components/contact.styles";
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
           <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>eddarlostudy@yahoo.com</h5>
            <a href="mailto: eddarlostudy@yahoo.com">send a message</a>
           </article>
           <article className="contact_option">
           <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Edd-Arlo Garcia</h5>
            <a target="_blank" rel="noreferrer" href="https://m.me/eddarlo.garcia">send a message</a>
           </article>
           <article className="contact_option">
           <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>eddarlostudy@yahoo.com</h5>
            <a href="mailto: eddarlostudy@yahoo.com">send a message</a>
           </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="text" name='email' placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
           <button type='submit' className="btn btn-primary">Send Message</button>
         </form>
       </div>
      </section>
   )
 }

 export default Contact;

// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log("Form", formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invlaid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log("Handle Form", formState);
//     }
//   };
//   return (
//     <ContactSection>
//       <h1>Contact Me</h1>
//       <Form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
            
//           <label htmlFor="email">Email address:</label>
//           <input
//             type="email"
//             name="email"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             name="message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">
//           Submit
//         </button>
//       </Form>
//     </ContactSection>
//   );
// }

// export default ContactForm;
