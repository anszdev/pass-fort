import { StyleSheet, TextInput, View } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { FeaterIcon } from './Icons';

type LabelProps = {
  label: string;
  icon?: 'hash' | 'lock';
  value: string;
  onChange?: (text: string) => void;
  textContentType?: 'telephoneNumber' | 'password' | 'emailAddress' | undefined;
};

export function Field({
  label = '',
  icon,
  value = '',
  onChange,
  textContentType,
  ...props
}: LabelProps) {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.field, { backgroundColor: colors.inputColor }]}>
      {icon && <FeaterIcon name={icon} size={24} color={colors.text} />}
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.text}
        value={value}
        onChangeText={onChange}
        textContentType={textContentType}
        {...props}
        style={[styles.fieldInput, { color: colors.text }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  fieldInput: {
    fontSize: 16,
    fontFamily: 'Raleway500',
  },
});
