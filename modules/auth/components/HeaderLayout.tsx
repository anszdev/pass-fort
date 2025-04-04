import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Logo } from '@core/components/Icons';
import { ButtonIcon } from '@core/components/ButtonIcon';

export function HeaderAuthLayout({
  backgroundColor,
  route,
}: {
  backgroundColor: string;
  route?: string;
}) {
  const router = useRouter();

  return (
    <View style={[styles.header, { backgroundColor }]}>
      {route !== 'index' && (
        <View style={styles.buttonContainer}>
          <ButtonIcon icon="chevron-left" onPress={() => router.back()} />
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
