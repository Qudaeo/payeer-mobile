import React from 'react';
import Svg, {Defs, RadialGradient, Rect, Stop} from 'react-native-svg';

interface IImageBackground {
  width: number;
  height: number;
}

const ImageBackground = ({width, height}: IImageBackground) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <Rect width={width} height={height} fill="url(#paint0_radial_0_1274)" />
    <Defs>
      <RadialGradient
        id="paint0_radial_0_1274"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(84 172.53) rotate(65.7064) scale(704.888 807.679)">
        <Stop stopColor="#11BDFD" />
        <Stop offset="1" stopColor="#0A83F8" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default ImageBackground;
