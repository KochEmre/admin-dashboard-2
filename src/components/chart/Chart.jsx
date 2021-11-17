import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey,grid }) => {
{}
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#223653"/>
            <Line type="monotone" dataKey={dataKey} stroke="#223653" />
            <Tooltip/>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
