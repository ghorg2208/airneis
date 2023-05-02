import {BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip,Legend,PieChart,Pie,Cell} from "recharts";

const HistogrammeAvg = ({ data, granularity }) => {
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(data[0]).map((key, index) => {
          if (key === "name") return null;
          return <Bar key={key} dataKey={key} stackId="a" fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />;
        })}
      </BarChart>
    );
  };

  export default HistogrammeAvg;