import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '@core/components/Button';
import { Container } from '@core/components/Container';
import { Carrusel } from '@auth/components/Carrusel';
import { useFormStore } from '@auth/store/formStore';

export default function Index() {
  const { setMode } = useFormStore();

  return (
    <Container>
      <Carrusel />
      <View style={styles.action}>
        <Link href="/login" asChild>
          <Button text="Iniciar sesión" />
        </Link>
        <Link href="/(auth)/(register)" asChild>
          <Button
            text="Registrarse"
            variant="transparent"
            onPress={() => {
              setMode('register');
            }}
          />
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
