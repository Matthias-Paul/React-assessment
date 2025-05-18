import { tableData }  from "../../src/data/data"
import arrow from "../../public/maximize-2.png"


const Table = () => {
  return (
    <>
      <div className=" border  border-[#E2E2E2] rounded-[12px] p-[10px] " >
        <div className="flex my-[16px] justify-between items-center " >
            <h2 className="text-[18px] font-[500] text-[#121212] " > Recent Card Requests  </h2>
            <img className=" w-[20px]  h-[20px] "  src={arrow}  />
        </div>    

        <div className=" overflow-hidden  overflow-x-auto  relative rounded-sm lg:rounded-md"  > 
         <table className="w-full  text-left min-w-[500px] text-[#475467] " >
              <thead className=" bg-[#F1F7FF] text-xs text-[#0000008F] " >
                <tr>
                  <th className="py-2 px-4 sm:py-3 " > Branch </th>
                  <th className="py-2 px-4 sm:py-3 " > Card Type </th>
                  <th className="py-2 px-4 sm:py-3 " > Quantity </th>
                  <th className="py-2 px-4 sm:py-3 " > Status </th>
                  <th className="py-2 px-4 sm:py-3 " > Action </th>

                </tr>
  
              </thead>
              <tbody>
                   { tableData?.map((data, index)=>(
                        <tr key={index}  className={`border-b border-[#EAECF0]  cursor-pointer text-[12px] ${index === tableData?.length -1  ? "border-b-0": ""} `} >
                         <td className="py-2 px-4  sm:px-4  " > 
                            {data.branch}
                         </td >
                         <td className="py-2 px-4  sm:px-4" > 
                            {data.cardType}
                         </td >
                         <td className="py-2 px-4  sm:px-4" > 
                            {data.quantity}
                         </td >
                         <td className="py-2 px-4   sm:px-4" > 
                           <button  className={`border rounded-full border-[#FEDF89] p-[7px] 
                            ${
                                data.status === 'Ready'
                                ? 'text-[#067647'
                                : data.status === 'Acknowledged'
                                ? 'text-[#175CD3]'
                                : data.status === 'Pending'
                                ? 'text-#344054'
                                : 'text-[#B54708] '
                            }
                            `}
                        > {  data.status }  </button>                    
                         </td >
                         <td className="py-2 text-[#014DAF] font-[700] px-4 sm:py-4 sm:px-4" > 
                            {data.action}                      
                         </td >
                        </tr>
  
                    )
                )}
              </tbody>
              
            </table>  
            </div>
      </div>  
    </>
  )
}

export default Table
