import lapoLogo from "../../public/LAPO_Logo_2022-removebg-preview 1.png"
import dashboardLogo from "../../public/home-03.png"
import cardrifiLogo from "../../public/cardinfra logo 1.png"
import stockLogo from "../../public/chart-bar-line.png"
import roleLogo from "../../public/user-shield-01.png"
import userLogo from "../../public/user-group.png"
import branchesLogo from "../../public/building-06.png"
import cardSchemeLogo from "../../public/setting-05.png"
import cardProfileLogo from "../../public/credit-card-pos.png"
import cardLogo from "../../public/credit-card-accept.png"
import cardsLogo from "../../public/credit-card.png"
import authLogo from "../../public/list.png"
import authQueueLogo from "../../public/layers-three-01.png"
import trialLogo from "../../public/map-01.png"
import accLogo from "../../public/user.png"
import logLogo from "../../public/logout-02.png"


const SideBar = () => {
  return (
    <div  className=" w-[230px] w-full  px-[10px] border-r-[1px] border-[#DEDEDF] h-full " >
      <div>
        <img className=" object-cover pt-[27px]  w-[138px] " src={lapoLogo} />
      </div>

      <div className=" border-[0.6px] border-[#E2E2E2] p-[12px] bg-[#F6F6F6] cursor-pointer flex items-center rounded-[8px]  mt-[30px] " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={dashboardLogo} />
        <div className="text-[12px] text-[#014DAF] font-medium " > Dashboard</div>
      </div>

       <div className="text-[9px] pl-[12px] mt-[25px] text-[#7E8B9C] font-medium " > MAIN MENU</div>
     <div className="mb-[200px]" >
        <div className="w-full p-[12px] cursor-pointer flex items-center mt-[5px] " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={branchesLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Branches</div>
      </div>
      
      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={roleLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Roles</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center  " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={userLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Users</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center  " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={cardSchemeLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Card Scheme</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center  " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={cardProfileLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Card Profile</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={cardLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Card Request</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={stockLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Stock </div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={cardsLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Cards</div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={authLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Authorization Lists </div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={authQueueLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Authorization Queues </div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={trialLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Trail </div>
      </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={accLogo} />
        <div className="text-[12px] text-[#00000080] font-medium " > Account </div>
      </div>

     </div>

      <div className="w-full p-[12px] cursor-pointer flex items-center   " >
        <img className="w-[16px] h-[16px] mr-[12px] " src={logLogo} />
        <div className="text-[12px] text-[#121212] font-medium " > Logout </div>
      </div>
        <div className="  pb-10 " >
            <div className="text-[9px] text-[#121212] mt-[50px] font-medium ml-[12px] " > POWERED BY </div>
            <img className="w-[96px] h-[42px] object-cover mt-[2px]  ml-[12px]  " src={cardrifiLogo} />

        </div>
        




    </div>
  )
}

export default SideBar


