import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '@core/components/Button';
import { InputFormControl } from '@core/components/InputFormControl';
import { FormTitle } from '@auth/components/FormTitle';
import { FormLinkBottom, FormLinkTop } from '@auth/components/FormLink';
import { FormContainer } from '@auth/components/FormContainer';
import { EMAIL_RULES, PASSWORD_RULES } from '@auth/constants/formRules';
import { useFormStore } from '@/modules/auth/store/formStore';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { setMode } = useFormStore();

  const onSubmit = (data: FormData) => {
    console.log('data', data);
  };

  return (
    <FormContainer
      formFooter={
        <Button text="Iniciar Sesión" onPress={handleSubmit(onSubmit)} />
      }
    >
      <FormTitle title="Inicia sesión ahora!" salute="Hey 👋🏽" />
      <FormLinkTop
        href="/(auth)/(register)"
        textLink="Registrate"
        description="¿Aún no tienes cuenta?"
        preventAction={() => {
          setMode('register');
        }}
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
        <InputFormControl
          control={control}
          errors={errors}
          rules={PASSWORD_RULES}
          name="password"
          label="Tu Contraseña"
          icon="lock"
          type="password"
        />
      </View>
      <FormLinkBottom
        href="/(auth)/(register)"
        textLink="Resetéala"
        description="¿Olvidaste tu contraseña?"
        preventAction={() => {
          setMode('reset-password');
        }}
      />
    </FormContainer>
  );
}
