// import emailjs from '@emailjs/browser'
// import { useRef } from 'react';

// const Contacts = () => {

// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm('service_qfdcv14','template_d7roxa5',form.current, {
//       publicKey: 'wokS_ak5A4JgXf6Wz',
//     })
//     .then(
//       () => {
//         alert('SUCCESS!');
//         form.current.reset();

//       },
//       (error) => {
//         alert('FAILED...', error.text);
//       },
//     );
// };

//   return (

    
//    <footer id='contacts' className="flex justify-center items-center ">
//     <form ref={form} onSubmit={sendEmail}className="flex flex-col justify-between">
//         <h2 className="font-bold text-center text-lg mt-5">Get in touch</h2>
//         <input className="border border-emerald-700 p-5 m-5"type="text" placeholder="Your Name" id="name" name="user_name"required />
//         <input type="text" placeholder="Email id" id="email" required className="border border-emerald-700 p-5 m-5"name="user_email"/>
//         <input type="text" placeholder="Phone Number" id="phone" required className="border border-emerald-700 p-5 m-5" name="user_number"/>
//         <textarea className="border border-emarald-700 p-5 m-5"id="message" rows="4" placeholder="Enter your message "name="message"/>
//         <button type="submit" className="bg-blue-500 text-white border border-blue-500 rounded-lg px-4 py-2 text-sm mx-auto block">
//   Send
// </button>
//     </form>

//    </footer>
//   )
// }

// export default Contacts