import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { FeaterIcon } from './Icons';
import Animated from 'react-native-reanimated';
import { useAnimateInput } from '../hooks/useAnimateInput';

interface LabelProps extends TextInputProps {
  label?: string;
  icon?: 'hash' | 'lock';
  textContentType?: 'telephoneNumber' | 'password' | 'emailAddress' | undefined;
}

export const Field = ({
  label = '',
  icon,
  textContentType,
  ...props
}: LabelProps) => {
  const { colors } = useThemeColors();
  const { animatedStyle, handleFocus, handleBlur } = useAnimateInput();

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
        textContentType={textContentType}
        secureTextEntry={textContentType === 'password'}
        style={[styles.fieldInput, { color: colors.text }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </Animated.View>
  );
};

Field.displayName = 'Field';

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
