
const Nav = () => {
  return (
    <header>
        <nav className=" items-center flex flex-col space-y-10 md:flex-row lg:flex-row  justify-between mb-10  ">
            <img src="https://i.pinimg.com/736x/27/09/e4/2709e4b355bbf61eca23449264939e12.jpg"
             className="h-16 w-16 rounded-xl mr-10 " />

             <div className="flex space-x-10 ">
            <text>About me</text>
            <text>Services</text>
            <text>Contacts</text>
            <text>Project</text>
             </div>

             <div>
              <text className= " border border-black h-5 w-10 p-3 ">Let's chat</text>
             </div>
             

        </nav>
        <hr className="border-b border-gray-300"></hr>
       
    </header>
  )
}

export default Nav