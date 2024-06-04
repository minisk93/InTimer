import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

const FADE_ANIMATION_DURATION_MS = 300;

export const useFadeWrapper = (isVisible: boolean, delay?: number) => {
  const opacity = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const [isUnmount, setIsUnmount] = useState(!isVisible);

  useEffect(() => {
    setIsUnmount(false);
    Animated.sequence([
      Animated.delay(delay || 0),
      Animated.timing(opacity, {
        toValue: isVisible ? 1 : 0,
        duration: FADE_ANIMATION_DURATION_MS,
        useNativeDriver: true
      })
    ]).start(() =>
      setTimeout(() => {
        if (!isVisible) {
          setIsUnmount(true);
        }
      }, FADE_ANIMATION_DURATION_MS)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return {isUnmount, opacity};
};
