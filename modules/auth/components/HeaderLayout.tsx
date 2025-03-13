import { StyleSheet, View } from 'react-native';
import { Logo } from '@core/components/Icons';

export function Header({ backgroundColor }: { backgroundColor: string }) {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 9,
  },
});
