import React from 'react';
import {Animated} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {colors} from 'shared/assets';
import {useLoader} from './useLoader';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface LoaderProps {
  size?: number;
  strokeWidth?: number;
}

const Loader: React.FC<LoaderProps> = ({size = 50, strokeWidth = 5}) => {
  const {rotateAnimation, sizes} = useLoader(size, strokeWidth);
  const [svgSize, circleCenter, radius, dashSize, dashOffset] = sizes;

  return (
    <Animated.View
      style={{
        transform: [{rotate: rotateAnimation}]
      }}>
      <Svg height={svgSize} width={svgSize}>
        <Circle
          cx={circleCenter}
          cy={circleCenter}
          r={radius}
          stroke={colors.white}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <AnimatedCircle
          cx={circleCenter}
          cy={circleCenter}
          r={radius}
          stroke={colors.blue}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashSize}, ${dashSize}`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </Svg>
    </Animated.View>
  );
};

export default Loader;
