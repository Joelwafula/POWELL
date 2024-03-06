
const Hero = () => {
  return (
    <div className=" p-20 items-center flex justify-between ml-10">
      <section className="flex flex-row">

        <p className="font-bold text-4xl mr-20 font-sans "> 
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
            className="w-96 h-50 ml-10 p-5 "
            alt="Logo"
          />
        
      </section>
    </div>
  );
};

export default Hero;
