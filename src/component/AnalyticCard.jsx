import { analyticData }  from "../../src/data/data"

const AnalyticCard = () => {
  return (
    <>
      <div className="flex flex-col w-full " >
        
        <div className="font-[700] text-[18px] my-[18px] block " > Analytics </div>

        <div className="flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] " >
        {
            analyticData.map((data, index)=>(
                <div key={index} className=" border  px-[8px] py-[10px]  cursor-pointer rounded-[10px] border-[#E2E2E2] " >
                    <img className="w-[16px] h-[16px] my-[4px]  " src={data.icon} />
                    <div className="text-[14px] font-[500] text-[#0000008F] " > {data.topic}  </div>
                    <div className="flex my-[13px] text-[12px] items-center  text-[#0000008F]  " >
                        <div className={`text-[24px]  font-[700] text-[#121212] mr-[60px] ${index === analyticData.length - 1 ? "mr-[90px]": "" } `} > {data.amount} </div>
                        <div className="flex bg-[#EFFAF6] rounded-[4px] py-[4px] px-[7px] mr-[6px] " > <img className="w-[12px] mt-[3px]  h-[12px] object-cover  " src={data.subIcon} /> {data.percent} </div>
                        <div className={index === analyticData.length - 1 ? "text-[#E78020]" : ""}> {data.time} </div>

                    </div>    
                </div>    
            ))
        }
        </div>
      </div>  
    </>
  )
}

export default AnalyticCard
