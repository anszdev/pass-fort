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
import { useFormStore } from '../store/formStore';
import { type ScreenProps } from '../types';

type FormData = {
  email: string;
};

type FormScreenMessages = {
  title: string;
  salute: string;
  loginDescription: string;
};

export function EmailScreen({ mode }: ScreenProps) {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const { email, setEmail } = useFormStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
    },
  });

  const screenMessages: Record<ScreenProps['mode'], FormScreenMessages> = {
    register: {
      title: 'Registrate ahora!',
      salute: 'Hey, bienvenid@ 👋🏽',
      loginDescription: '¿Ya tienes cuenta?',
    },
    'reset-password': {
      title: 'Restablecela ahora',
      salute: '¿Se te olvidó tu contraseña? 😒',
      loginDescription: '¿Ya la recordaste?',
    },
  };

  const onSubmit = (data: FormData) => {
    setEmail(data.email);
    console.log(email);

    /* router.navigate('/(auth)/(register)/otp-code'); */
  };

  return (
    <FormContainer
      formFooter={
        <>
          <Steps steps={3} currentStep={1} />
          <ButtonIcon
            icon="arrow-right"
            variant="primary"
            disabled={!isChecked && mode === 'register'}
            onPress={handleSubmit(onSubmit)}
          />
        </>
      }
    >
      <FormTitle
        title={screenMessages[mode].title}
        salute={screenMessages[mode].salute}
      />
      <FormLinkTop
        href="/login"
        textLink="Inicia Sesión"
        description={screenMessages[mode].loginDescription}
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
        {mode === 'register' && (
          <FieldCheck
            label="Acepto los Términos y Condiciones"
            toggleCheck={setIsChecked}
            isChecked={isChecked}
          />
        )}
      </View>
    </FormContainer>
  );
}
