import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSizes } from '../constants/Fonts';

export function useThemeColors() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;
  return {
    colors,
    colorScheme,
    fontSizes: FontSizes,
  };
}
