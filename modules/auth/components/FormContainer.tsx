import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        >
          <View>{children}</View>
        </ScrollView>
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
      </KeyboardAvoidingView>
    </Container>
  );
}
