import { Pressable, StyleSheet } from 'react-native';
import { FeaterIcon } from './Icons';
import { useThemeColors } from '../hooks/useThemeColors';
import { forwardRef, type Ref } from 'react';

interface ButtonIconProps {
  onPress?: () => void;
  icon: 'chevron-left' | 'arrow-right';
  variant?: 'primary' | 'transparent';
  disabled?: boolean;
}

export const ButtonIcon = forwardRef(
  (
    {
      onPress,
      icon,
      variant = 'transparent',
      disabled = false,
    }: ButtonIconProps,
    ref: Ref<any>
  ) => {
    const { colors } = useThemeColors();

    const getBackgroundColor = (pressed: boolean) => {
      if (disabled) {
        return colors.inputColor;
      }

      if (variant === 'transparent') {
        return pressed ? colors.secondaryLight : colors.background;
      }

      return colors.secondary;
    };

    return (
      <Pressable
        style={({ pressed }) => [
          styles.buttonIcon,
          {
            backgroundColor: getBackgroundColor(pressed),
          },
        ]}
        onPress={disabled ? undefined : onPress}
        ref={ref}
        disabled={disabled}
      >
        <FeaterIcon name={icon} size={24} color={colors.text} />
      </Pressable>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

const styles = StyleSheet.create({
  buttonIcon: {
    borderRadius: 99999,
    overflow: 'hidden',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
