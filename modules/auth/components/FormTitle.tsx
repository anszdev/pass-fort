import { useThemeColors } from '@core/hooks/useThemeColors';
import { View, Text, StyleSheet } from 'react-native';

type FormTitleProps = {
  title: string;
  salute: string;
};

export function FormTitle({ title, salute }: FormTitleProps) {
  const { colors, fontSizes } = useThemeColors();

  return (
    <View style={{ marginTop: 82 }}>
      <Text
        style={[
          styles.formTitle,
          { color: colors.text, fontSize: fontSizes.formTitle },
        ]}
      >
        {salute}
      </Text>
      <Text
        style={[
          styles.formTitle,
          { color: colors.text, fontSize: fontSizes.formTitle },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    fontFamily: 'Raleway600',
    marginBottom: 5,
  },
});
