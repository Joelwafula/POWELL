

const Services = () => {
  return (
   
   <section id="services" className=" flex flex-col-reverse sm:flex-col-reverse p-5 sm:p-5 md:p-20 sm:flex md:flex md:flex-row sm:items-center ">
          <div className="mb-10 w-50 h-40 sm:w-60 sm:h-50 md:w-60 md:h-40 lg:w-1/2 lg:h-80 lg:ml-10 lg:p-5">
     <img
            src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA="
            // className="w-1/2 h-80 mr-20 "
            className="object-fill"
            alt="Logo"
          />

          </div>
    <div className="sm:ml-5 sm:p-2">
        <h1 className="font-bold text-2xl text-blue-400 md:text-5xl mb-5">Our Services</h1>
       
        <ul className="list-disc list-inside indent-3 text-wrap  text-lg md:max-w-50 font-serif">
            <li>Markerting consultancy services</li>
            <li>Market research and market forth telling for Services.</li>
            <li>Market research and market forth telling for Services.</li>
            <li>Selling and buying of goods through Brokage,dropshipping and affiliate account.</li>
            <li>Provide virtual assistance and personal assistance services 
                to individuals and organisations.</li>
            <li>Social media account management.</li>
        </ul>

    </div>

   </section>
  )
}

export default Services

// const Nav = () => {
//   return (
//     <header>
//       <nav className="items-center flex flex-col md:flex-row lg:flex-row justify-between mb-10">
//         <img
//           src="https://i.pinimg.com/736x/27/09/e4/2709e4b355bbf61eca23449264939e12.jpg"
//           className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-xl mr-10 mb-4 md:mb-0"
//           alt="Logo"
//         />
//         <div className="md:flex lg:flex">
//           <div className="flex flex-col md:flex-row lg:flex-row space-y-4 md:space-y-0 lg:space-y-0 md:space-x-4 lg:space-x-4">
//             <text className="text-sm md:text-base lg:text-lg">About me</text>
//             <text className="text-sm md:text-base lg:text-lg">Services</text>
//             <text className="text-sm md:text-base lg:text-lg">Contacts</text>
//             <text className="text-sm md:text-base lg:text-lg">Project</text>
//           </div>
//         </div>
//       </nav>
//       <hr className="border-b border-gray-300" />
//     </header>
//   );
// };

// export default Nav;
