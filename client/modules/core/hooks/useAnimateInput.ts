import { useThemeColors } from './useThemeColors';
import { Easing, useSharedValue } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';
import { withTiming } from 'react-native-reanimated';

export function useAnimateInput() {
  const { colors } = useThemeColors();
  const borderColor = useSharedValue(colors.inputColor);

  const animatedStyle = useAnimatedStyle(() => ({
    borderColor: borderColor.value,
  }));

  const handleFocus = () => {
    borderColor.value = withTiming(colors.secondary, {
      duration: 200,
      easing: Easing.out(Easing.ease),
    });
  };

  const handleBlur = () => {
    borderColor.value = withTiming(colors.inputColor, {
      duration: 200,
      easing: Easing.out(Easing.ease),
    });
  };

  return {
    animatedStyle,
    handleFocus,
    handleBlur,
  };
}
