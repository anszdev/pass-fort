import { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '@core/components/Button';
import { InputFormControl } from '@core/components/InputFormControl';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { Steps } from '@auth/components/Steps';
import { PasswordCreationSuccess } from '@auth/components/PasswordCreationSuccess';
import {
  CONFIRM_PASSWORD_RULES,
  PASSWORD_RULES,
} from '@auth/constants/formRules';

export default function PasswordScreen() {
  const [accountCreated, setAccountCreated] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

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
              onPress={handleSubmit(createAccount)}
            />
          </>
        }
      >
        <FormTitle title="Crea y confirma tu contraseña!" salute="Hey 🙈" />
        <View style={{ gap: 24, marginTop: 46 }}>
          <InputFormControl
            control={control}
            name="password"
            errors={errors}
            rules={PASSWORD_RULES}
            label="Contraseña"
            icon="lock"
            type="password"
          />
          <InputFormControl
            control={control}
            name="confirmPassword"
            errors={errors}
            rules={CONFIRM_PASSWORD_RULES}
            label="Confirma la Contraseña"
            icon="lock"
            type="password"
          />
        </View>
      </FormContainer>
    </View>
  );
}
