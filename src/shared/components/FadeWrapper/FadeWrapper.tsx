import React, {ReactNode} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

import {useFadeWrapper} from './useFadeWrapper';

type FadeWrapperProps = {
  isVisible: boolean;
  children: ReactNode;
  delay?: number;
  style?: StyleProp<ViewStyle>;
};

const FadeWrapper: React.FC<FadeWrapperProps> = ({
  isVisible,
  delay,
  style,
  children
}: FadeWrapperProps) => {
  const {isUnmount, opacity} = useFadeWrapper(isVisible, delay);

  if (isUnmount) {
    return null;
  }

  return <Animated.View style={[style, {opacity}]}>{children}</Animated.View>;
};

export default FadeWrapper;
