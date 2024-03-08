
const Hero = () => {
  return (
   
      <section className="flex flex-col justify-center items-center sm:flex  sm:flex-row ">

        <p className="font-bold mb-5 text-base sm:mb-5 sm:text-lg  lg:text-4xl lg:mr-20 font-sans "> 
        Greetings! Our company,<br/> 
        ProVision, provides diverse <br/>
        solutions tailored to meet,<br/>
         your needs and exceed<br/> 
         expectations.We offer various <br/>
         solutions.
       

        </p>
        
          <img
         src="https://t4.ftcdn.net/jpg/01/28/18/19/240_F_128181986_0G3yw8k1CUZa4d4YE8DeDDUEntoj3Odt.jpg"
            // src="https://pro-vision.biz/wp-content/uploads/2020/04/PROVISION_Group_logov2-1.png"
            className="w-40 h-30 sm:w-50 sm:h-35 md:w-60 md:h-40 lg:w-96 lg:h-60 lg:ml-10 lg:p-5 "
            alt="Logo"
          />
        
      </section>
  
  );
};

export default Hero;
