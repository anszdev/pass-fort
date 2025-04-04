import { View } from 'react-native';
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
      <View>{children}</View>
      <View
        style={{
          marginVertical: 24,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {formFooter}
      </View>
    </Container>
  );
}
