import { Stack } from 'expo-router';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { Header } from '@auth/components/HeaderLayout';

export default function AuthLayout() {
  const { colors } = useThemeColors();
  return (
    <Stack
      screenOptions={{
        headerTitle: () => null,
        header: () => <Header backgroundColor={colors.background} />,
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
