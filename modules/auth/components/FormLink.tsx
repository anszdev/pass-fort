import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useThemeColors } from '@core/hooks/useThemeColors';

type FormLinkProps = {
  href: any;
  textLink: string;
  description: string;
};

export function FormLinkTop({ href, textLink, description }: FormLinkProps) {
  const { colors } = useThemeColors();

  return (
    <View
      style={[styles.formLinkContainer, { marginTop: 46, marginBottom: 34 }]}
    >
      <Text style={[styles.formLink, { color: colors.text, opacity: 0.5 }]}>
        {description} /
      </Text>
      <Link
        href={href}
        style={[styles.formLink, { color: colors.text, opacity: 1 }]}
      >
        {textLink}
      </Link>
    </View>
  );
}

export function FormLinkBottom({ href, textLink, description }: FormLinkProps) {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.formLinkContainer, { marginTop: 34 }]}>
      <Text style={[styles.formLink, { color: colors.text, opacity: 0.5 }]}>
        {description} /
      </Text>
      <Link
        href={href}
        style={[styles.formLink, { color: colors.text, opacity: 1 }]}
      >
        {textLink}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  formLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  formLink: {
    fontSize: 18,
    fontFamily: 'Raleway500',
  },
});
