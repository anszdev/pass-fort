import { View, Text, StyleSheet } from 'react-native';
import { FONT_SIZE } from '@core/styles/Fonts';
import { useThemeColors } from '@core/hooks/useThemeColors';

type FormTitleProps = {
  title: string;
  salute: string;
};

export function FormTitle({ title, salute }: FormTitleProps) {
  const { colors } = useThemeColors();

  return (
    <View style={{ marginTop: 82 }}>
      <Text
        style={[
          styles.formTitle,
          { color: colors.text, fontSize: FONT_SIZE.formTitle },
        ]}
      >
        {salute}
      </Text>
      <Text
        style={[
          styles.formTitle,
          { color: colors.text, fontSize: FONT_SIZE.formTitle },
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
