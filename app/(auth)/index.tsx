import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Carrusel } from '@auth/components/Carrusel';
import { Button } from '@core/components/Button';
import { Container } from '@core/components/Container';

export default function Index() {
  return (
    <Container>
      <Carrusel />
      <View style={styles.action}>
        <Link href="/login" asChild>
          <Button text="Iniciar sesión" />
        </Link>
        <Link href="/(auth)/(register)" asChild>
          <Button text="Registrarse" variant="transparent" />
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  action: {
    marginVertical: 24,
    gap: 8,
  },
});
