
import { NavLink } from "react-router-dom";
import gif from "../Img/Revenue.gif";
import "./Home.css";

const Home=()=> {

   
  return (
  

   <div className="">
     <div className="mx-auto max-w-7xl">
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div id="text" className="sm:text-center lg:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline ">Save Money</span>
        <br/>
        <span id="text2" className="block text-indigo-600 xl:inline">Easily</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Never spend your money before you have earned it.</p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a href="www.youtube.com" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
        </div>
      </div>
    </div>
  </main>
   </div>
<div  className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
<img id="image" className=" w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full lg:mt-12" src={gif} alt=""/>
</div>
  <br/>
  <div id="dashboard">
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
   <div className="flex justify-center space-x-4 mt-3">
   <NavLink to="/">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Total</button>
         </NavLink>

         <NavLink to="/monthly">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Monthly</button>
         </NavLink>

        <NavLink to="/category">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Category</button>
         </NavLink>
        

   </div>
  </div>
    </div>
  );
};
export default Home;
