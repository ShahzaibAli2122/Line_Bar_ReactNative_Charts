import React from 'react';
import LineChart from './line-chart';
import LineChartGrouped from './line-chart-grouped';

const LineChartGate = props => {
  const {
    data
  } = props;

  if (data[0] && data[0].hasOwnProperty('data')) {
    return /*#__PURE__*/React.createElement(LineChartGrouped, props);
  }

  return /*#__PURE__*/React.createElement(LineChart, props);
};

export default LineChartGate;
//# sourceMappingURL=index.js.map