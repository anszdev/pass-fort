import { View } from 'react-native';
import { Field } from '@core/components/Field';
import { Button } from '@core/components/Button';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { Steps } from '@auth/components/Steps';

export default function Password() {
  const createAccount = () => {
    console.log('contraseña confirmada');
  };

  return (
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
        <Field
          label="Contraseña"
          icon="lock"
          textContentType="password"
          secureTextEntry
        />
        <Field
          label="Confirma la contraseña"
          icon="lock"
          textContentType="password"
          secureTextEntry
        />
      </View>
    </FormContainer>
  );
}
