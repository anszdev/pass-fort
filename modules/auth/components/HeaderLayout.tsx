import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { FeaterIcon, Logo } from '@core/components/Icons';
import { useThemeColors } from '@core/hooks/useThemeColors';

export function HeaderAuthLayout({
  backgroundColor,
  route,
}: {
  backgroundColor: string;
  route?: string;
}) {
  const router = useRouter();
  const { colors } = useThemeColors();

  return (
    <View style={[styles.header, { backgroundColor }]}>
      {route !== 'index' && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => router.back()}>
            <FeaterIcon name="chevron-left" size={24} color={colors.text} />
          </Pressable>
        </View>
      )}
      <View style={styles.logoContainer}>
        <Logo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    paddingVertical: 9,
    flexDirection: 'row',
    position: 'relative',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
  },
});
