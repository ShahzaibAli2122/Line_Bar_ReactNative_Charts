// import React from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
// import { Circle } from 'react-native-svg';
// import * as scale from 'd3-scale';

// // Obtain full width of the device
// const fullWidth = Dimensions.get('window').width;

// // Define the BarData interface
// interface BarData {
//   value: number;
//   svg: {
//     fill: string;
//   };
//   key: string;
// }

// // Define the Chart component
// const Chart: React.FC = () => {
//   const data: BarData[] = [
//     { value: 50, svg: { fill: '#9b59b6' }, key: 'Sat' },
//     { value: 80, svg: { fill: '#3498db' }, key: 'Sun' },
//     { value: 60, svg: { fill: '#9b59b6' }, key: 'Mon' },
//     { value: 70, svg: { fill: '#3498db' }, key: 'Tue' },
//     { value: 90, svg: { fill: '#9b59b6' }, key: 'Wed' },
//     { value: 85, svg: { fill: '#3498db' }, key: 'Thu' },
//     { value: 75, svg: { fill: '#9b59b6' }, key: 'Fri' },
//   ];

//   const CUT_OFF = 20;
//   const Labels = ({ x, y, bandwidth, data }) => (
//     data.map((value, index) => (
//       <Text
//         key={index}
//         x={x(index) + (bandwidth / 2)}
//         y={y(value.value) + (CUT_OFF / 2)}
//         fontSize={14}
//         fill={'white'}
//         alignmentBaseline={'middle'}
//         textAnchor={'middle'}
//       >
//         {value.value + '%'}
//       </Text>
//     ))
//   );

//   const Decorator = ({ x, y, data }) => {
//     return data.map((value, index) => (
//       <Circle
//         key={index}
//         cx={x(index) + (fullWidth / (data.length * 2))}
//         cy={y(value.value)}
//         r={4}
//         stroke={'#3498db'}
//         fill={'white'}
//       />
//     ));
//   };

//   return (
//     <View style={{ height: 220, padding: 20, flexDirection: 'row' }}>
//       <YAxis
//         data={data}
//         yAccessor={({ item }) => item.value}
//         scale={scale.scaleLinear}
//         contentInset={{ top: 20, bottom: 20 }}
//         svg={{ fontSize: 10, fill: 'grey' }}
//         numberOfTicks={10}
//         formatLabel={(value) => `${value}%`}
//       />
//       <View style={{ flex: 1, marginLeft: 10 }}>
//         <BarChart
//           style={{ flex: 1 }}
//           data={data}
//           yAccessor={({ item }) => item.value}
//           xAccessor={({ item, index }) => index}
//           xScale={scale.scaleBand}
//           svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
//           contentInset={{ top: 10, bottom: 10 }}
//           spacingInner={0.2}
//           spacingOuter={0.2}
//           gridMin={0}
//         >
//           <Grid direction={Grid.Direction.HORIZONTAL}/>
//           <Labels/>
//           <Decorator/>
//         </BarChart>
//         <XAxis
//           style={{ marginTop: 10 }}
//           data={data}
//           scale={scale.scaleBand}
//           formatLabel={(value, index) => data[index].key}
//           labelStyle={{ color: 'black' }}
//           svg={{ fontSize: 10, fill: 'black' }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Chart;


import { View, Text } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
const BarCharts = () => {
  const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
  return (
    <View>
      <Text>
      
<LineChart data = {data} areaChart />
{/* <PieChart data = {data} donut /> */}
      {/* 
      <BarChart data = {data} />

<LineChart data = {data} />
<PieChart data = {data} />
<PopulationPyramid data = {[{left:10,right:12}, {left:9,right:8}]} />

// For Horizontal Bar chart, just add the prop horizontal to the <BarChart/> component

<BarChart data = {data} horizontal />

// For Area chart, just add the prop areaChart to the <LineChart/> component


// For Donut chart, just add the prop donut to the  component

 */}
sadas
      </Text>
     
    </View>
  )
}

export default BarCharts
