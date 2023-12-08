/* eslint-disable react-native/no-inline-styles */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// import React from 'react';
// import { BarChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const data = {
//   labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43, 50],
//       color: (opacity = 1) => `rgba(0, 175, 239,  ${opacity})`, // Use color picker for exact color
//       strokeWidth: 2,
//     },
//     {
//       data: [30, 90, 67, 54, 10, 50, 80],
//       color: (opacity = 1) => `rgba(0, 175, 239,  ${opacity})`, // Use color picker for exact color
//       strokeWidth: 2,
//     },
//   ],
// };

// const chartConfig = {
//   fillShadowGradient: '#fffff', // Gradient shade of fill color
//   fillShadowGradientOpacity: 1,
//   backgroundGradientFrom: '#fff',
//   backgroundGradientTo: '#fff',
//   decimalPlaces: 2,
//   color: (opacity = 10) => `rgba(0, 175, 239, 1) ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   barPercentage: 0.7,
//   barRadius: 4, // Adjust the radius of the bar corners
//   propsForDots: {
//     r: '6',
//     strokeWidth: '2',
//     stroke: "#ffa726"
//   }

// };

// const App = () => {
//   return (
//     <BarChart
//       style={{
//         marginVertical: 8,
//         borderRadius: 16,
//         // Add any additional styling to match the original design
//       }}
//       data={data}
//       width={screenWidth}
//       height={220}
//       yAxisLabel=""
//       yAxisSuffix="%"
//       chartConfig={chartConfig}
//       verticalLabelRotation={0}
//       fromZero={true}
//       showBarTops={false}
//       withInnerLines={false} // Hides inner horizontal lines
//       withOuterLines={true}  // Show only outer border lines
//       withVerticalLabels={true}
//       withHorizontalLabels={true}

//     />
//   );
// };

// export default App;

import {View,ScrollView} from 'react-native';
import React from 'react';
import Charts from './Charts/AttendanceCharts';
import LineCharts from './Charts/LineCharts';
import BarCharts from './Charts/BarChart';
const App = () => {
  return (
    <ScrollView >

    <View>
      <Charts />
      <View style={{marginTop: 50}}>
        <LineCharts />
      </View>
      <View style={{marginTop: 50}}>


        <><textarea name="" id="" cols="30" rows="10"></textarea></>
        <><figure></figure></>
      <BarCharts />
      </View>
    </View>
    </ScrollView>

  );
};

export default App;
