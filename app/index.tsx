import { Logo } from '@/modules/core/components/Icons';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.welcomePage}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
