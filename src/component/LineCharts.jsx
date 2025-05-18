import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { lineChartData }  from "../../src/data/data"



const LineCharts = () => {
  return (
    <>
      <div className=" border  border-[#E2E2E2] rounded-[12px] mb-[50px] p-[10px]   "  >
        <h3 className="text-[18px] text-[#121212] font-medium my-[16px] " >  This Week’s Income  </h3>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart margin={{ left: -35 }} data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis axisLine={false} tickLine={false}  dataKey="day" />
            <YAxis axisLine={false} tickLine={false}    />
            <Line dot={false} type="monotone" dataKey="amount" stroke="#00C851" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>


      </div>  
    </>
  )
}

export default LineCharts
