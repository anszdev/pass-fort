import { StyleSheet } from 'react-native';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColors } from '../hooks/useThemeColors';
import { forwardRef, type Ref } from 'react';

interface ButtonProps {
  text: string;
  onPress?: () => void;
  variant?: 'primary' | 'transparent';
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const Button = forwardRef((props: ButtonProps, ref: Ref<any>) => {
  const { text, onPress, variant } = props;
  const {
    colors: { primary, secondary, textInverted },
  } = useThemeColors();
  const gradientPosition = useSharedValue(0);
  const animatedGradientStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    width: '200%',
    height: '100%',
    left: withTiming(gradientPosition.value === 1 ? '-100%' : '0%', {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }),
  }));

  const handlePress = () => {
    gradientPosition.value = gradientPosition.value === 0 ? 1 : 0;
    if (!onPress) return;
    onPress();
  };

  return (
    <Pressable style={styles.button} onPress={handlePress} ref={ref}>
      {variant !== 'transparent' && (
        <View style={styles.gradientContainer}>
          <AnimatedLinearGradient
            colors={[primary, secondary, secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.gradient, animatedGradientStyle]}
          />
        </View>
      )}
      <Text
        style={[
          styles.text,
          { color: variant === 'transparent' ? textInverted : '#ffffff' },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
});

Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    borderRadius: 99999,
    overflow: 'hidden',
    paddingVertical: 16,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    zIndex: 1,
  },
});
