import { useThemeColors } from '../hooks/useThemeColors';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { FeaterIcon } from './Icons';

type FieldCheckProps = {
  label: string;
  toggleCheck: (value: boolean) => void;
  isChecked: boolean;
};

export function FieldCheck({ label, toggleCheck, isChecked }: FieldCheckProps) {
  const { colors } = useThemeColors();

  return (
    <TouchableOpacity
      style={styles.fieldCheck}
      onPress={() => toggleCheck(!isChecked)}
    >
      <View
        style={[
          styles.check,
          {
            borderColor: colors.secondary,
            backgroundColor: isChecked ? colors.secondary : 'transparent',
          },
        ]}
      >
        {isChecked && <FeaterIcon name="check" size={18} color="#fff" />}
      </View>
      <Text
        style={[
          styles.label,
          { color: colors.text, opacity: isChecked ? 1 : 0.5 },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fieldCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    marginRight: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Raleway500',
  },
});
