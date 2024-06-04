import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

import {globalStyles} from 'shared/assets';

type PageWrapperPropsType = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  edges?: Edges;
};

const PageWrapper: React.FC<PageWrapperPropsType> = ({
  children,
  style,
  safeAreaStyle,
  edges
}) => {
  return (
    <SafeAreaView
      edges={edges}
      style={[globalStyles.pageSafeArea, safeAreaStyle]}>
      <View style={[globalStyles.page, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default PageWrapper;
