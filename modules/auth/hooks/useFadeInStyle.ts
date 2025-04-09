import {
  Easing,
  useAnimatedStyle,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

export function useFadeInStyle(
  sharedValue: SharedValue<number>,
  delay: number
) {
  return useAnimatedStyle(() => ({
    opacity: withDelay(
      delay,
      withTiming(sharedValue.value ? 1 : 0, {
        duration: 300,
        easing: Easing.out(Easing.circle),
      })
    ),
  }));
}
