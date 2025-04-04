import { useState } from 'react';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { OtpField } from '@auth/components/OtpField';
import { FormLinkBottom } from '@/modules/auth/components/FormLink';
import { View } from 'react-native';
import { ButtonIcon } from '@/modules/core/components/ButtonIcon';

export default function VerifyOtpCodeScreen() {
  const [code, setCode] = useState('');

  return (
    <FormContainer
      actionContent={<ButtonIcon icon="arrow-right" variant="primary" />}
    >
      <FormTitle salute="Hey 🤫" title="Verifica el codigo" />
      <View style={{ marginTop: 46 }}>
        <OtpField code={code} onCodeChange={setCode} />
      </View>
      <FormLinkBottom
        description="¿No te llego el codigo?"
        href="/"
        textLink="Reenviar"
      />
    </FormContainer>
  );
}
