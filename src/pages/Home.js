const Home = () => {
    return (
        <div className="  sm:grid grid-cols-12  lg:px-12 lg:py-12">
         <div className=" lg:order-last order-first sm:mt-8  flex justify-center items-center col-span-12 lg:col-span-5">
        
        <img className="  ring-4 ring-green-500 object-cover w-220px md:w-350px   rounded-full
       "  src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      
       
 </div>
           <div className="col-span-12 lg:col-span-7 sm:mt-14">
             <div className="px-2">
             <h1  className=" mt-8  dark:text-fbw text-gray-900  border-b-2 border-green-500 pb-3 text-center sm:text-left">05 May ,2020</h1>
           
          
           <h1 className="lg:py-5 py-4 sm:text-left   text-center dark:text-fbw">WELCOME TO MUZAMIL HUSSAIN PORTFOLIO</h1>
             <h1 className="sm:text-5xl sm:text-left  text-3xl text-center mt-3 text-green-500 font-bold sm:mt-5">TALK <span className=" dark:text-fbw text-gray-700">IS CHEAP SHOW ME YOUR CODE </span></h1>
           
             <h1 className="sm:text-left text-center mt-4   font-semibold   dark:text-fbw text-gray-800">I am full stack web and mobile developer specialized in React and Flutter </h1>
             </div>
          
             <div className="  sm:block   flex justify-center items-center">
             <button class="    mt-5 w-1/3 sm:w-1/4 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-500   hover:opacity-70">Contact</button>
             </div>
            
           </div>
          
          
        </div>
    )
}

export default Home
