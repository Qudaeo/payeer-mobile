import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

interface IGraph {
  color: string;
}

const Graph = ({color}: IGraph) => (
  <Svg width="91" height="35" viewBox="0 0 91 35" fill="none">
    <Path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 20.1244L7.15515 20.5998L12.8959 18.2712L19.1429 2.6725L24.9141 1.54346L30.6965 3.54175L37.1503 1.54346L43.2422 22.3959L48.6064 18.2712L54.3935 19.3454L61.0681 13.3661L66.8079 20.5998L72.3264 10.3532L79.5312 15.2157L84.4942 16.5734L90 15.2157V33.4674L1 34.5435V20.1244Z"
      fill="url(#paint0_linear_1467_605)"
    />
    <Path
      d="M1 20.503L7.15515 21.1394L12.8959 18.0225L19.1429 3.05469L24.9141 1.54346L30.6965 4.2182L37.1503 1.54346L43.2422 23.5435L48.6064 18.0225L54.3935 19.4604L61.0681 12.9347L66.8079 21.1394L72.3264 10.3798L79.5312 15.4105L84.4942 17.2278L90 15.4105"
      stroke={color}
      strokeWidth="1.72662"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1467_605"
        x1="1"
        y1="1.54346"
        x2="1"
        y2="34.5435"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color} stopOpacity="0.5" />
        <Stop offset="1" stopColor={color} stopOpacity="0.01" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Graph;
