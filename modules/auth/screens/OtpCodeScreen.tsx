import { useEffect, useState } from 'react';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { OtpField } from '@auth/components/OtpField';
import { FormLinkBottom } from '@/modules/auth/components/FormLink';
import { Keyboard, Text, View } from 'react-native';
import { ButtonIcon } from '@/modules/core/components/ButtonIcon';
import { useRouter } from 'expo-router';
import { Steps } from '@/modules/auth/components/Steps';
import { FONT_FAMILY, FONT_SIZE } from '@/modules/core/styles/Fonts';
import { useThemeColors } from '@/modules/core/hooks/useThemeColors';
import { type ScreenProps } from '../types';

export function OtpCodeScreen({ mode }: ScreenProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { colors } = useThemeColors();

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleCodeSubmit = () => {
    const codeRegex = /^[0-9]{6}$/;
    if (!codeRegex.test(code)) {
      setError('El código debe tener solo números.');
      return;
    }

    setError(null);
    console.log('Código OTP enviado:', code);
    router.push('/password');
  };

  useEffect(() => {
    if (code.length === 6) {
      Keyboard.dismiss();
    }
  }, [code]);

  return (
    <FormContainer
      formFooter={
        <>
          <Steps steps={3} currentStep={2} />
          <ButtonIcon
            icon="arrow-right"
            variant="primary"
            disabled={code.length < 6}
            onPress={handleCodeSubmit}
          />
        </>
      }
    >
      <FormTitle salute="Hey 🤫" title="Verifica el código" />
      <View style={{ marginTop: 46 }}>
        <Text
          style={{
            fontSize: FONT_SIZE.base,
            fontFamily: FONT_FAMILY.medium,
            color: colors.text,
            marginBottom: 16,
          }}
        >
          Lo enviamos a:
          <Text style={{ color: colors.primary }}> ang****@gmail.com</Text>
        </Text>
        <OtpField code={code} onCodeChange={handleCodeChange} />
        {error && (
          <Text
            style={{
              fontSize: FONT_SIZE.sm,
              color: colors.error,
              fontFamily: FONT_FAMILY.medium,
              marginTop: 6,
            }}
          >
            {error}
          </Text>
        )}
      </View>
      <FormLinkBottom
        description="¿No te llego el código?"
        href="/"
        textLink="Reenviar"
      />
    </FormContainer>
  );
}
