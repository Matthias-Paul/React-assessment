import { cardData } from "../../src/data/data"
const rightIcon = "/chevron-right.png"
const CardGrid = () => {
  return (
  <>
  
  <div className=" w-full border border-[#E2E2E2] flex flex-col  rounded-[12px] px-[20px] py-[18px] " >

    <h2 className="text-[16px] font-medium mb-[13px] flex justify-start  " >   Your Quick Access </h2>
    <div  className="grid gap-[15px]  grid-cols-2 lg:grid-cols-4 " >
    {
            cardData.map((data, index)=>(
                <div className="py-[10px] px-[15px] mb-[15px] md:mb-[0px] cursor-pointer rounded-[4px] flex items-center bg-[#F1F7FF] max-w-[279px]  " key={index}>
                    <img className="w-[28px] h-[28px] mr-4  " src={data.icon} />
                    <div className=" text-[12px] sm:text-[14px] font-[500] flex items-center  " > {data.name } < img className=" ml-[7px] mt-[2px] w-[18px] h-[18px] " src={rightIcon} />  </div>
                </div>    
            ))
        }
    </div>
   

  </div>
  
  </>
  )
}

export default CardGrid


