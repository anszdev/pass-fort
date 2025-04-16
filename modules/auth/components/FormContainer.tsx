import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Container } from '@core/components/Container';

export function FormContainer({
  children,
  formFooter,
}: {
  children: React.ReactNode;
  formFooter: React.ReactNode;
}) {
  return (
    <Container>
      <KeyboardAwareScrollView
        bottomOffset={8}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flexGrow: 1, paddingBottom: 100 }}>{children}</View>
      </KeyboardAwareScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          paddingBottom: 24,
          paddingTop: 16,
        }}
      >
        {formFooter}
      </View>
    </Container>
  );
}
