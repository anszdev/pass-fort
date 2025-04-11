import { useThemeColors } from '@core/hooks/useThemeColors';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Fonts } from '@core/styles/Fonts';
import * as SystemUI from 'expo-system-ui';

export default function RootLayout() {
  const [loaded] = useFonts(Fonts);
  const { colors } = useThemeColors();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        navigationBarColor: colors.background,
      }}
    >
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
