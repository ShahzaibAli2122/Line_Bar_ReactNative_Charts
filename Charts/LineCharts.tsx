// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-native/no-inline-styles */
// // /* eslint-disable react-native/no-inline-styles */
// // import React from 'react';
// // import {View} from 'react-native';
// // import {LineChart} from 'react-native-chart-kit';
// // import {Dimensions} from 'react-native';

// // const LineCharts = () => {
// //   return (
// //     <View>
// //       <LineChart
// //         data={{
// //           labels: ['January', 'February', 'March', 'April', 'May', 'June'],
// //           datasets: [
// //             {
// //               data: [0, 1, 2, 3, 4, 3],
// //             },
// //           ],
// //         }}
// //         width={Dimensions.get('window').width} // from react-native
// //         height={220}
// //         yAxisLabel={'$'}
// //         chartConfig={{
// //           backgroundColor: '#e26a00',
// //           backgroundGradientFrom: '#fb8c00',
// //           backgroundGradientTo: '#ffa726',
// //           decimalPlaces: 2, // optional, defaults to 2dp
// //           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
// //           style: {
// //             borderRadius: 16,
// //           },
// //         }}
// //         bezier
// //         style={{
// //           marginVertical: 8,
// //           borderRadius: 16,
// //         }}
// //       />
// //     </View>
// //   );
// // };

// // export default LineCharts;
// import React, {useState} from 'react';
// import {View, Dimensions, Text} from 'react-native';
// import {LineChart} from 'react-native-chart-kit';

// const MyLineChart = () => {
//   const [selectedDot, setSelectedDot] = useState(null);

//   const chartConfig = {
//     backgroundColor: '#e26a00',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     decimalPlaces: 2, // optional, defaults to 2dp
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//     // Update the line color to #00AFEF
//     propsForDots: {
//       stroke: '#00AFEF',
//       strokeWidth: '2', // You can adjust the strokeWidth for the line
//     },
//   };

//   const data = {
//     // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: [0, 1, 2, 3, 4, 3],
//         // Set the color of the line to #00AFEF
//         color: (opacity = 1) => `rgba(0, 175, 239, ${opacity})`, // optional
//         strokeWidth: 2, // optional
//       },
//     ],
//   };

//   return (
//     <View>
//       <LineChart
//         data={data}
//         width={Dimensions.get('window').width}
//         height={220}
//         yAxisLabel={'$'}
//         chartConfig={chartConfig}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//         // eslint-disable-next-line react/no-unstable-nested-components
//         decorator={() => {
//           if (selectedDot) {
//             return (
//               <>
//                 <View
//                   style={{
//                     position: 'absolute',
//                     left:
//                       (Dimensions.get('window').width /
//                         data.datasets[0].data.length) *
//                       selectedDot.index,
//                     top: 0,
//                     bottom: 0,
//                     borderColor: '#94A3B8',
//                     borderWidth: 1,
//                     borderLeftWidth: 0,
//                     borderRightWidth: 0,
//                     borderTopWidth: 0,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     position: 'absolute',
//                     left:
//                       (Dimensions.get('window').width /
//                         data.datasets[0].data.length) *
//                         selectedDot.index -
//                       10,
//                     top: '100%',
//                   }}>
//                   {selectedDot.value}
//                 </Text>``
//               </>
//             );
//           }
//         }}
//         onDataPointClick={({value, dataset, getColor}) => {
//           setSelectedDot({value, index: dataset.data.indexOf(value)});
//         }}
//       />
//     </View>
//   );
// };

// export default MyLineChart;

import React, { useEffect, useRef, useState } from 'react';
// import * as React from 'react'
import {
    PanResponder,
    Dimensions,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AreaChart, XAxis, YAxis } from 'react-native-svg-charts';
import {
    Circle,
    Defs,
    G,
    Line,
    LinearGradient,
    Path,
    Rect,
    Stop,
    Text as SvgText,
} from 'react-native-svg';
import * as shape from 'd3-shape';

export default InteractiveChart;

function InteractiveChart() {
    const apx = (size = 0) => {
        let width = Dimensions.get('window').width;
        return (width / 750) * size;
    };

    const [dateList, setDateList] = useState([
        '08-31 15:09',
        '08-31 15:10',
        '08-31 15:11',
        '08-31 15:12',
        '08-31 15:13',
    ]);
    const [priceList, setPriceList] = useState([
        47022.9649875,
        47097.6349875,
        47132.3149875,
        47137.6449875,
        47164.9949875,
    ]);
    const size = useRef(dateList.length);

    const [positionX, setPositionX] = useState(-1);// The currently selected X coordinate position

    const panResponder = useRef(
        PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                updatePosition(evt.nativeEvent.locationX);
                return true;
            },
            onPanResponderMove: (evt, gestureState) => {
                updatePosition(evt.nativeEvent.locationX);
                return true;
            },
            onPanResponderRelease: () => {
                setPositionX(-1);
            },
        })
    );

    const updatePosition = (x: number) => {
        const YAxisWidth = apx(130);
        const x0 = apx(0);// x0 position
        const chartWidth = apx(750) - YAxisWidth - x0;
        const xN = x0 + chartWidth;//xN position
        const xDistance = chartWidth / size.current;// The width of each coordinate point
        if (x <= x0) {
            x = x0;
        }
        if (x >= xN) {
            x = xN;
        }

        // console.log((x - x0) )

        // The selected coordinate x :
        // (x - x0)/ xDistance = value
        let value = ((x - x0) / xDistance).toFixed(0);
        if (value >= size.current - 1) {
            value = size.current - 1; // Out of chart range, automatic correction
        }

        setPositionX(Number(value));
    };

    const CustomGrid = ({ x, y, ticks }) => (
        <G>
            {
                // Horizontal grid
                ticks.map((tick: React.Key | null | undefined) => (
                    <Line
                        key={tick}
                        x1="0%"
                        x2="100%"
                        y1={y(tick)}
                        y2={y(tick)}
                        stroke="#EEF3F6"
                    />
                ))
            }
            {
                // Vertical grid
                priceList.map((_, index) => (
                    <Line
                        key={index.toString()}
                        y1="0%"
                        y2="100%"
                        x1={x(index)}
                        x2={x(index)}
                        stroke="#EEF3F6"
                    />
                ))
            }
        </G>
    );

    const CustomLine = ({ line }) => (
        <Path
            key="line"
            d={line}
            stroke="#FEBE18"
            strokeWidth={apx(6)}
            fill="none"
        />
    );

    const CustomGradient = () => (
        <Defs key="gradient">
            <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
                {/* <Stop offset="0%" stopColor="rgb(134, 65, 244)" /> */}
                {/* <Stop offset="100%" stopColor="rgb(66, 194, 244)" /> */}

                <Stop offset="0%" stopColor="#FEBE18" stopOpacity={0.25} />
                <Stop offset="100%" stopColor="#FEBE18" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    );

    const Tooltip = ({ x, y, ticks }) => {
        if (positionX < 0) {
            return null;
        }

        const date = dateList[positionX];

        return (
            <G x={x(positionX)} key="tooltip">
                <G
                    x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
                    y={y(priceList[positionX]) - apx(10)}>
                    <Rect
                        y={-apx(24 + 24 + 20) / 2}
                        rx={apx(12)} // borderRadius
                        ry={apx(12)} // borderRadius
                        width={apx(300)}
                        height={apx(96)}
                        stroke="rgba(254, 190, 24, 0.27)"
                        fill="rgba(255, 255, 255, 0.8)"
                    />

                    <SvgText x={apx(20)} fill="#617485" opacity={0.65} fontSize={apx(24)}>
                        {date}
                    </SvgText>
                    <SvgText
                        x={apx(20)}
                        y={apx(24 + 20)}
                        fontSize={apx(24)}
                        fontWeight="bold"
                        fill="rgba(224, 188, 136, 1)">
                        ${priceList[positionX]}
                    </SvgText>
                </G>

                <G x={x}>
                    <Line
                        y1={ticks[0]}
                        y2={ticks[Number(ticks.length)]}
                        stroke="#FEBE18"
                        strokeWidth={apx(4)}
                        strokeDasharray={[6, 3]}
                    />

                    <Circle
                        cy={y(priceList[positionX])}
                        r={apx(20 / 2)}
                        stroke="#fff"
                        strokeWidth={apx(2)}
                        fill="#FEBE18"
                    />
                </G>
            </G>
        );
    };

    const verticalContentInset = { top: apx(40), bottom: apx(40) };

    return (
        <View
            style={{
                backgroundColor: '#fff',
                alignItems: 'stretch',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: apx(750),
                    height: apx(570),
                    alignSelf: 'stretch',
                }}>
                <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
                    <AreaChart
                        style={{ flex: 1 }}
                        data={priceList}
                        // curve={shape.curveNatural}
                        curve={shape.curveMonotoneX}
                        contentInset={{ ...verticalContentInset }}
                        svg={{ fill: 'url(#gradient)' }}>
                        <CustomLine />
                        <CustomGrid />
                        <CustomGradient />
                        <Tooltip />
                    </AreaChart>
                </View>

                <YAxis
                    style={{ width: apx(130) }}
                    data={priceList}
                    contentInset={verticalContentInset}
                    svg={{ fontSize: apx(20), fill: '#617485' }}
                />
            </View>
            <XAxis
                style={{
                    alignSelf: 'stretch',
                    // marginTop: apx(57),
                    width: apx(750),
                    height: apx(60),
                }}
                numberOfTicks={7}
                data={priceList}
                formatLabel={(value: string | number, index: any) => dateList[value]}
                contentInset={{
                    left: apx(36),
                    right: apx(130),
                }}
                svg={{
                    fontSize: apx(20),
                    fill: '#617485',
                    y: apx(20),
                    // originY: 30,
                }}
            />
        </View>
    );
}
