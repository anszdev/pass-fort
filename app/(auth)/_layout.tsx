import { Stack } from 'expo-router';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { HeaderAuthLayout } from '@auth/components/HeaderLayout';

export default function AuthLayout() {
  const { colors } = useThemeColors();
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerTitle: () => null,
        header: () => (
          <HeaderAuthLayout
            backgroundColor={colors.background}
            route={route.name}
          />
        ),
      })}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="(register)" />
      <Stack.Screen name="reset-password" />
    </Stack>
  );
}
