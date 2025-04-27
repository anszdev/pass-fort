import { Stack } from 'expo-router';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { HeaderAuthLayout } from '@auth/components/HeaderLayout';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function AuthLayout() {
  const { colors } = useThemeColors();
  return (
    <KeyboardProvider>
      <Stack
        screenOptions={({ route }: { route: any }) => ({
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
      </Stack>
    </KeyboardProvider>
  );
}
