import {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const ANIM_DURATION_MS = 1000;

export const useLoader = (size: number, strokeWidth: number) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: ANIM_DURATION_MS,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      })
    ).start();
  }, [rotateAnim]);

  const rotateAnimation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const sizes: number[] = useMemo(() => {
    const sizeWithoutStroke = size - strokeWidth;
    const dashSize = sizeWithoutStroke * Math.PI;
    const svgSize = size + strokeWidth;

    return [
      svgSize,
      svgSize / 2,
      sizeWithoutStroke / 2,
      dashSize,
      dashSize / 2
    ];
  }, [size, strokeWidth]);

  return {rotateAnimation, sizes};
};
