import homeLogo from "../../public/home-03 (1).png";
import searchIcon from "../../public/search-md.png";
import notificationIcon from "../../public/bell-01.png";
import userIcon from "../../public/Avatar.png";

const NavBar = () => {
  return (
    <div className="flex  w-full px-[15px] justify-between border-b-[1px] items-center border-[#DEDEDF] ">
      <div className=" cursor-pointer ml-[40px] lg:ml-[0px]  flex items-center">
        <img className="w-[16px] h-[16px] mr-[12px]" src={homeLogo} alt="Home" />
        <div className="text-[12px] text-[#001735] font-medium">Dashboard</div>
      </div>

        <div className=" flex items-center" >


        <div className="relative ml-6 py-[7px]  ">
            <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[12px] h-[12px] pointer-events-none"
            />
            <input
            type="search"
            className="w-full border border-[#DEDEDF] py-[10px] pl-8 pr-3 rounded-full text-sm"
            placeholder="Search"
            />
        </div>

            <img
            src={notificationIcon}
            className=" ml-[20px]  w-[20px] h-[20px] cursor-pointer"
            />

            <img
            src={userIcon}
            className=" ml-[20px]  w-[32px] h-[32px]  cursor-pointer"
            />


        </div>
    </div>
  );
};

export default NavBar;
