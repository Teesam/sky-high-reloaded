import 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { useData } from "../hooks/useData";
import { useState } from "react";


const PieChart = () => {
  const [promotionData] = useData();
  const [chartData] = useState({
    labels: ["Purple", "Green", "Orange", "Yellow"],
    datasets: [
      {
          data: [20, 40, 10, 30],
          backgroundColor: [
              "#878BB6", 
              "#4ACAB4", 
              "#FF8153", 
              "#FFEA88"
          ]  
      }],
    borderColor: "grey",
    borderWidth: 1
  });

  return (
    <div>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Promotion data between 2016-2023"
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart;