import { useThemeColors } from '@core/hooks/useThemeColors';
import { View, Text, StyleSheet } from 'react-native';

type FormTitleProps = {
  title: string;
  salute: string;
};

export function FormTitle({ title, salute }: FormTitleProps) {
  const { colors } = useThemeColors();

  return (
    <View style={{ marginTop: 82 }}>
      <Text style={[styles.formTitle, { color: colors.text }]}>{salute}</Text>
      <Text style={[styles.formTitle, { color: colors.text }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 32,
    fontFamily: 'Raleway600',
    marginBottom: 5,
  },
});
