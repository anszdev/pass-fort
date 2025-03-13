import { StyleSheet, Text, View } from 'react-native';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { Button } from '@core/components/Button';

export default function AuthScreen() {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Iniciar Sesión</Text>
      <Button text="Volver" onPress={() => console.log('first')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
