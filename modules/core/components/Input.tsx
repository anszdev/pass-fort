import { Pressable, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { FeaterIcon } from './Icons';
import Animated from 'react-native-reanimated';
import { useAnimateInput } from '../hooks/useAnimateInput';
import { type FieldError } from 'react-hook-form';
import { useState } from 'react';

export interface InputProps extends TextInputProps {
  label?: string;
  icon?: 'hash' | 'lock' | 'mail';
  type?: 'telephoneNumber' | 'password' | 'emailAddress' | undefined;
  error?: FieldError;
}

export const Input = ({
  label = '',
  icon,
  type,
  error,
  ...props
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { colors } = useThemeColors();
  const {
    animatedStyle,
    handleFocus,
    handleBlur: animateBlur,
  } = useAnimateInput();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isPassword = type === 'password';

  return (
    <Animated.View
      style={[
        styles.field,
        {
          backgroundColor: colors.inputColor,
        },
        animatedStyle,
      ]}
    >
      {icon && <FeaterIcon name={icon} size={18} color={colors.text} />}
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.text}
        textContentType={type}
        secureTextEntry={isPassword && !isPasswordVisible}
        style={[styles.fieldInput, { color: colors.text }]}
        onFocus={handleFocus}
        onEndEditing={animateBlur}
        {...props}
      />
      {type === 'password' && (
        <Pressable onPress={togglePasswordVisibility}>
          <FeaterIcon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={18}
            color={colors.text}
          />
        </Pressable>
      )}
    </Animated.View>
  );
};

Input.displayName = 'Input';

const styles = StyleSheet.create({
  field: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  fieldInput: {
    fontSize: 16,
    fontFamily: 'Raleway500',
    flex: 1,
  },
});
