import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { FieldCheck } from '@core/components/FieldCheck';
import { ButtonIcon } from '@core/components/ButtonIcon';
import { InputFormControl } from '@core/components/InputFormControl';
import { FormTitle } from '@auth/components/FormTitle';
import { FormLinkTop } from '@auth/components/FormLink';
import { FormContainer } from '@auth/components/FormContainer';
import { Steps } from '@auth/components/Steps';
import { EMAIL_RULES } from '@auth/constants/formRules';

type FormData = {
  email: string;
};

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('data', data);
    router.navigate('/(auth)/(register)/otp-code');
  };

  return (
    <FormContainer
      formFooter={
        <>
          <Steps steps={3} currentStep={1} />
          <ButtonIcon
            icon="arrow-right"
            variant="primary"
            disabled={!isChecked}
            onPress={handleSubmit(onSubmit)}
          />
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
        <InputFormControl
          control={control}
          errors={errors}
          rules={EMAIL_RULES}
          name="email"
          label="Correo Electrónico"
          icon="mail"
        />
        <FieldCheck
          label="Acepto los Términos y Condiciones"
          toggleCheck={setIsChecked}
          isChecked={isChecked}
        />
      </View>
    </FormContainer>
  );
}
