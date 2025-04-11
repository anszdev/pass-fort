import { useState } from 'react';
import { View } from 'react-native';
import { FieldCheck } from '@core/components/FieldCheck';
import { Input } from '@/modules/core/components/Input';
import { FormTitle } from '@auth/components/FormTitle';
import { FormLinkTop } from '@auth/components/FormLink';
import { FormContainer } from '@auth/components/FormContainer';
import { Link } from 'expo-router';
import { ButtonIcon } from '@core/components/ButtonIcon';
import { Steps } from '@auth/components/Steps';

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <FormContainer
      formFooter={
        <>
          <Steps steps={3} currentStep={1} />
          <Link href="/(auth)/(register)/otp-code" asChild>
            <ButtonIcon
              icon="arrow-right"
              variant="primary"
              disabled={!isChecked}
            />
          </Link>
        </>
      }
    >
      <FormTitle title="Registrate ahora!" salute="Hey, bienvenid@ 👋🏽" />
      <FormLinkTop
        href="/login"
        textLink="Inicia Sesión"
        description="¿Ya tienes cuenta?"
      />
      <View style={{ gap: 24 }}>
        <Input label="Correo o Número de Telefono" value="" icon="hash" />
        <FieldCheck
          label="Acepto los términos y condiciones"
          toggleCheck={setIsChecked}
          isChecked={isChecked}
        />
      </View>
    </FormContainer>
  );
}
