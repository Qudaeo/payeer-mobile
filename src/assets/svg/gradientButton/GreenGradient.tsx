import React from 'react';
import Svg, {Defs, G, LinearGradient, Rect, Stop} from 'react-native-svg';

interface IGreenGradient {
  width: number;
  height: number;
}

const GreenGradient = ({width, height}: IGreenGradient) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none">
    <G filter="url(#filter0_d_0_1661)">
      <Rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="8"
        fill="url(#paint0_linear_0_1661)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_0_1661"
        x1="-132.446"
        y1="27.5375"
        x2="-117.957"
        y2="124.376"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#49D60A" />
        <Stop offset="1" stopColor="#09CB01" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default GreenGradient;
