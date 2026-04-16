import { PieChart, Pie, Tooltip, Legend } from "recharts";

function Stats() {
  const data = [
    { name: "Text", value: 4, fill: "#7E35E1" },
    { name: "Call", value: 4, fill: "#244D3F" },
    { name: "Video", value: 4, fill: "#37A163" },
  ];
  return (
    <div className="my-20 max-w-278 mx-auto space-y-6">
      <h2 className="text-[#1F2937] text-5xl font-bold">
        Friendship Analytics
      </h2>
      <div className="bg-white rounded-lg p-8 space-y-6 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
        <h4 className="text-xl text-[#244D3F] font-medium">
          By Interaction Type
        </h4>
        <div className="flex justify-center items-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "340px",
              maxHeight: "300px",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="75%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="5%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Stats;
