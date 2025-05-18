import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import { barChartData } from "../../src/data/data"

const BarCharts = () => {
  return (
    <>
      <div className=" border  border-[#E2E2E2] rounded-[12px] p-[10px]   "  >
        <h3 className="text-[18px] text-[#121212] font-medium my-[16px] " >  Monthly Issurance  </h3>
        <div className="border-b-[1px] border-[#E2E2E2] mb-[-20px]  ">
        <ResponsiveContainer width="100%" height={210}>
            <BarChart  margin={{ left: -35 }}  data={barChartData}>
            <CartesianGrid vertical={false} stroke="#E2E2E2" />
            <XAxis  axisLine={false} tickLine={false} dataKey="name" />
            <YAxis  axisLine={false} tickLine={false} />
            <Bar   barSize={40} radius={[4, 4, 0, 0]} dataKey="Instant" stackId="a" fill="#014DAF" />
            <Bar  barSize={40}  radius={[8, 8, 0, 0]} dataKey="Personalized" stackId="a" fill="#CCE2FF" />
            </BarChart>
        </ResponsiveContainer>
        </div>
        <div className=" mt-[-65px] flex justify-center text-[#808080] items-center mb-[-20px] " >  
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] mr-[-19px] text-[#014DAF] " > . </span> Personalized </div>
            <div className="font-[500] text-[12px]  " > <span className="text-[80px] ml-[20px] mr-[-19px] text-[#CCE2FF] " > . </span> Instant </div>

        </div>    


      </div>  
    </>
  )
}

export default BarCharts
