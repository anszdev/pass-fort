import { View } from 'react-native';
import { Input } from '@/modules/core/components/Input';
import { Button } from '@core/components/Button';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { Steps } from '@auth/components/Steps';
import { useState } from 'react';
import { PasswordCreationSuccess } from '@/modules/auth/components/PasswordCreationSuccess';

export default function Password() {
  const [accountCreated, setAccountCreated] = useState(false);

  const createAccount = () => {
    console.log('contraseña confirmada');
    setAccountCreated(true);
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <PasswordCreationSuccess showSuccesView={accountCreated} />
      <FormContainer
        formFooter={
          <>
            <Steps steps={3} currentStep={3} />
            <Button
              text="Crear Cuenta"
              variant="primary"
              width="fit"
              onPress={createAccount}
            />
          </>
        }
      >
        <FormTitle title="Crea y confirma tu contraseña" salute="Hey 🤐" />
        <View style={{ gap: 24, marginTop: 46 }}>
          <Input label="Contraseña" icon="lock" textContentType="password" />
          <Input
            label="Confirma la contraseña"
            icon="lock"
            textContentType="password"
          />
        </View>
      </FormContainer>
    </View>
  );
}
