import { Button } from '@/modules/core/components/Button';
import { ShieldCheck } from '@/modules/core/components/Icons';
import { useThemeColors } from '@/modules/core/hooks/useThemeColors';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useFadeInStyle } from '../hooks/useFadeInStyle';

export function PasswordCreationSuccess({
  showSuccesView,
}: {
  showSuccesView: boolean;
}) {
  const { colors } = useThemeColors();

  // Animation values
  const succesView = useSharedValue(0);
  const messageOpacity = useSharedValue(0);
  const checkmarkOpacity = useSharedValue(0);
  const circleOpacity = useSharedValue(0);

  // Animation styles
  const successViewStyle = useAnimatedStyle(() => ({
    top: withTiming(succesView.value === 1 ? 40 : 720, {
      duration: 400,
      easing: Easing.out(Easing.exp),
    }),
  }));
  const successMessageStyle = useFadeInStyle(messageOpacity, 200);
  const successCheckmarkStyle = useFadeInStyle(checkmarkOpacity, 300);
  const successCheckCircleStyle = useFadeInStyle(circleOpacity, 350);

  useEffect(() => {
    if (showSuccesView) {
      succesView.value = 1;
      messageOpacity.value = 1;
      checkmarkOpacity.value = 1;
      circleOpacity.value = 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSuccesView]);

  return (
    <Animated.View
      style={[screen, successViewStyle, { backgroundColor: colors.background }]}
    >
      <Animated.View style={[{ flex: 1, justifyContent: 'center' }]}>
        <Animated.View
          style={[
            styles.circleCheck,
            successCheckmarkStyle,
            { backgroundColor: colors.primary },
          ]}
        >
          <Animated.View
            style={[
              styles.circleCheck,
              successCheckCircleStyle,
              { backgroundColor: colors.secondary },
            ]}
          >
            <ShieldCheck color={colors.text} size={120} />
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.textContainer, successMessageStyle]}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Raleway900',
              color: colors.text,
              textAlign: 'center',
            }}
          >
            ¡Cuenta creada con éxito!
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Raleway600',
              marginTop: 12,
              marginBottom: 24,
              color: colors.text,
              textAlign: 'center',
            }}
          >
            Ahora puedes iniciar sesión y disfrutar de una experiencia
            protegida. 🔒
          </Text>
          <Link href="/login" asChild>
            <Button text="Iniciar sesión" variant="primary" />
          </Link>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    zIndex: 99,
    position: 'absolute',
    inset: 0,
    height: '100%',
    width: '120%',
    margin: 'auto',
    marginHorizontal: -40,
    borderTopEndRadius: 130,
    borderTopStartRadius: 130,
  },
  circleCheck: {
    padding: 12,
    alignItems: 'center',
    borderWidth: 6,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '85%',
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
});
