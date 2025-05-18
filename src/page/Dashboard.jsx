const calenderIcon = "/calendar (1).png";

import SideBar from "../component/SideBar"
import NavBar from "../component/NavBar"
import { FiMenu } from 'react-icons/fi';
import { useState, useRef, useEffect } from "react";
import CardGrid from "../component/cardGrid";
import AnalyticCard from "../component/AnalyticCard";
import BarCharts from "../component/BarCharts";
import Table from "../component/Table";
import LineCharts from "../component/LineCharts";
import PieCharts from "../component/PieCharts";



const Dashboard = () => {


 const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // close event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
<>
     
    <div  className=" max-w-[1440px]  flex mx-auto max-h-[1024px] " >

      {/* mobile button */}
         <div className="border-b-[1px] absolute h-[57px] border-[#DEDEDF] " >
        <button
          ref={toggleButtonRef}
          onClick={toggleSidebar}
          className="flex border rounded-sm m-3 border-gray-300 mb-2 cursor-pointer justify-center items-center lg:hidden p-2 "
        >
          <FiMenu className="w-4 h-4" /> 
        </button>
         </div>
        
        


        <div
          ref={sidebarRef}
          className={`fixed  left-0 top-[50px] z-50 inset-y-0 bg-white overflow-y-auto lg:overflow-y-hidden transition-transform duration-300 lg:static lg:translate-x-0  ${
            isSidebarOpen ? " translate-x-0" : "-translate-x-full"
          }`}
        >
        <SideBar />
       </div>
          <main className=" max-w-[1200px]  mx-auto " >
             <NavBar />
             <div className="px-[15px]  " >

            <div className="w-full  sm:flex justify-between items-center  " >
              <div className="font-[600] sm:font-[700] text-[16px] sm:text-[18px] text-[#121212]  my-[10px] " > Hi Nazeer, what would you like to do today? </div>
              <div className="font-[400] max-w-[145px] flex p-[8px] mb-[15px] md:mb-[0px] gap-x-[5px] text-[11px] text-[#121212] border rounded-[4px] border-[#D0D5DD]  " >
                <img className=" w-[14px] h-[14px]  " src={calenderIcon} />
                <h4 className="mr-3" > Today </h4>
                <h4> 11 Nov 2024 </h4>
              </div>
            </div>
            <div className=" font-medium text-[12px] mt-[-5px] mb-[15px] " > Last login: 26/11/2024  14:39:58 </div>
            
            < CardGrid />
            <AnalyticCard />

            <div className="mt-[15px] grid sm:grid-cols-1 gap-[15px] md:grid-cols-2 mb-10 " >
            < BarCharts />
            < Table />
            <LineCharts />
            < PieCharts />


            </div>  







          </div>
          </main>
       
    </div>
  </>
  )
}

export default Dashboard
