import { useEffect, useState } from 'react';
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
import { useFormStore } from '@auth/store/formStore';
import { type ModeScreen, type ScreenMessages } from '@/modules/auth/types';
import { sendEmailCode } from '@/lib/auth';

type FormData = {
  email: string;
};

const screenMessages: Record<ModeScreen, ScreenMessages> = {
  register: {
    title: 'Registrate ahora!',
    salute: 'Hey, bienvenid@ 👋🏽',
    extra: '¿Ya tienes cuenta?',
  },
  'reset-password': {
    title: 'Cambiala ahora',
    salute: '¡Ups! ¿Olvidaste tu contraseña? 😅',
    extra: '¿Ya la recordaste?',
  },
};

export default function RegisterScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const { email, setEmail, mode } = useFormStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
    },
  });

  const onSubmit = async (data: FormData) => {
    setEmail(data.email);
    const result = await sendEmailCode(data.email);
    console.log('Code sent successfully:', result);
    router.push('/(auth)/(register)/otp-code');
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
        description={screenMessages[mode].extra || ''}
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
