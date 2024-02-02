/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            data: [200, 45, 28, 80, 99, 43, 50],
            color: (opacity = 1) => `rgba(0, 175, 239,  ${opacity})`, // Use color picker for exact color
            strokeWidth: 2,
        },
        {
            data: [30, 90, 67, 54, 10, 50, 80],
            color: (opacity = 1) => `rgba(0, 175, 239,  ${opacity})`, // Use color picker for exact color
            strokeWidth: 2,
        },
    ],
};

const chartConfig = {
    fillShadowGradient: '#00AFEF', // Gradient shade of fill color
    fillShadowGradientOpacity: 1,
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    color: (opacity = 10) => `rgba(0, 175, 239, 1) ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.7,
    barRadius: 4, // Adjust the radius of the bar corners
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
};

const AttendanceCharts = () => {
    return (
        <BarChart
            style={{
                marginVertical: 8,
                borderRadius: 16,
                // Add any additional styling to match the original design
            }}
            data={data}
            width={screenWidth}
            height={220}
            yAxisLabel=""
            yAxisSuffix="%"
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            showBarTops={false}
            withInnerLines={false} // Hides inner horizontal lines
            withOuterLines={true} // Show only outer border lines
            withVerticalLabels={true}
            withHorizontalLabels={true}
        />
    );
};

export default AttendanceCharts;
