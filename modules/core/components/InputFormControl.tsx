import {
  Controller,
  type FieldErrors,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import { Input, InputProps } from './Input';
import { Text, View } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { FONT_FAMILY, FONT_SIZE } from '../styles/Fonts';

interface InputFormControlProps extends InputProps {
  control: any;
  errors: FieldErrors<FieldValues>;
  rules: RegisterOptions;
  name: string;
}

export function InputFormControl({
  control,
  errors,
  rules,
  name,
  ...props
}: InputFormControlProps) {
  const { colors } = useThemeColors();
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            autoCapitalize="none"
            {...props}
          />
        )}
      />
      {errors[name]?.message && (
        <Text
          style={{
            fontSize: FONT_SIZE.sm,
            color: colors.error,
            fontFamily: FONT_FAMILY.medium,
            marginTop: 4,
          }}
        >
          {String(errors[name]?.message)}
        </Text>
      )}
    </View>
  );
}
