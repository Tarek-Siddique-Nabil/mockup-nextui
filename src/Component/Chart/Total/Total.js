import { Chart } from "react-google-charts";

const Total=()=> {
const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Copper", 44.94, "#b87333", 44.94],
    ["Silver", 47.49, "silver", null],
    ["Gold", 19.3, "gold", null],
    ["Platinum", 21.45, "color: #e5e4e2", null],
  ];
  
  const options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 0,
    height: 0,
    bar: { groupWidth: "95%" },
    legend: { position: "right" },
    colors: ['red'],
  };
  
   
    return (
      <div justify="center" align="center" css={{ m: 0 }}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      </div>
    );
  }
  export default Total;
  