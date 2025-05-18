import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import { pieChartData }  from "../../src/data/data"



const PieCharts = () => {

  const COLORS = ['#01A4AF', '#FFBA24', '#FF4457', '#8020E7', '#014DAF'];

  return (
    <>
      <div className=" border relative  border-[#E2E2E2] rounded-[12px] mb-[50px] p-[10px]   "  >
        <h3 className="text-[18px] text-[#121212] font-medium my-[16px] " >  Card Status Distribution  </h3>

        <ResponsiveContainer width="100%" height={180}>
            <PieChart>
            <Pie
                data={pieChartData}
                innerRadius={80}
                outerRadius={90}
                cornerRadius={8}
                fill="#8884d8"
                startAngle={360}  
                endAngle={-0}  
                dataKey="value"
            >
                {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>

        <div className=" absolute  top-[45%] left-[45%] " >
                <h2 className="text-[#808080] text-[12px] font-[500]  " > Total Cards  </h2>
                <h2  className="text-[#121212] text-[24px] font-[500]  "  > 2,450 </h2>
        </div>          


        <div className=" mt-[-65px] flex justify-center text-[#808080] items-center text-[12px] mb-[-20px] " >  
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] mr-[-19px] text-[#00984C] " > . </span> Active </div>
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] ml-[20px] mr-[-19px] text-[#FFBA24] " > . </span> Expired </div>
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] ml-[20px]  mr-[-19px] text-[#014DAF] " > . </span> Inactive </div>
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] ml-[20px] mr-[-19px] text-[#8020E7] " > . </span> Blocked </div>
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] ml-[20px] mr-[-19px] text-[#FF4457] " > . </span> Lost </div>

        </div>    

      </div>  
    </>
  )
}

export default PieCharts
