import { View } from 'react-native';
import { Button } from '@core/components/Button';
import { Field } from '@core/components/Field';
import { FormTitle } from '@auth/components/FormTitle';
import { FormLinkBottom, FormLinkTop } from '@auth/components/FormLink';
import { FormContainer } from '@auth/components/FormContainer';

export default function Login() {
  return (
    <FormContainer formFooter={<Button text="Iniciar Sesión" />}>
      <FormTitle title="Inicia sesión ahora!" salute="Hey 👋🏽" />
      <FormLinkTop
        href="/(auth)/(register)"
        textLink="Registrate"
        description="¿Aún no tienes cuenta?"
      />
      <View style={{ gap: 24 }}>
        <Field label="Correo o Número de Telefono" icon="hash" />
        <Field label="Contraseña" icon="lock" />
      </View>
      <FormLinkBottom
        href="/reset-password"
        textLink="Reseteala"
        description="¿Olvidaste tu contraseña?"
      />
    </FormContainer>
  );
}
