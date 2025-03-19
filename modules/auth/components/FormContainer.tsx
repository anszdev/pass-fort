import { View } from 'react-native';
import { Container } from '@core/components/Container';

export function FormContainer({
  children,
  actionContent,
}: {
  children: React.ReactNode;
  actionContent: React.ReactNode;
}) {
  return (
    <Container>
      <View>{children}</View>
      <View style={{ marginVertical: 24 }}>{actionContent}</View>
    </Container>
  );
}
