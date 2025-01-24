import {memo, ReactNode} from 'react';
import {KeyboardAvoidingView, StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isIos} from '~/shared/lib/isIos';

type ScreenContainerProps = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export const ScreenContainer = memo((props: ScreenContainerProps) => {
  const {children, containerStyle, contentStyle} = props;

  return (
    <KeyboardAvoidingView
      style={containerStyle}
      behavior={isIos() ? 'padding' : 'height'}>
      <SafeAreaView style={contentStyle}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
});
