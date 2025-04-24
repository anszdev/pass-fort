import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Link } from 'expo-router';
import { Button } from '@core/components/Button';
import { ShieldCheck } from '@core/components/Icons';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { FONT_FAMILY, FONT_SIZE } from '@core/styles/Fonts';
import { useFadeInStyle } from '../hooks/useFadeInStyle';
import { useFormStore } from '../store/formStore';
import { type ModeScreen, type ScreenMessages } from '../types';

const screenMessages: Record<ModeScreen, ScreenMessages> = {
  register: {
    title: '¡Cuenta creada con éxito!',
    salute:
      'Ahora puedes iniciar sesión y disfrutar de una experiencia protegida. 🔒',
  },
  'reset-password': {
    title: '¡Contraseña restablecida con éxito!',
    salute: 'Ahora puedes iniciar sesión con tu nueva contraseña. 🔒',
  },
};

export function PasswordCreationSuccess({
  showSuccesView,
}: {
  showSuccesView: boolean;
}) {
  const { colors } = useThemeColors();
  const { mode } = useFormStore();

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
      style={[
        styles.screen,
        successViewStyle,
        { backgroundColor: colors.secondaryBackground },
      ]}
    >
      <Animated.View style={[{ flex: 1, justifyContent: 'space-between' }]}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Animated.View
            style={[
              styles.circleCheck,
              successCheckmarkStyle,
              { borderColor: colors.borderPrimary },
            ]}
          >
            <Animated.View
              style={[
                styles.circleCheck,
                successCheckCircleStyle,
                { borderColor: colors.borderSecondary },
              ]}
            >
              <ShieldCheck color={colors.success} size={120} />
            </Animated.View>
          </Animated.View>
          <Animated.View style={[styles.textContainer, successMessageStyle]}>
            <Text style={[styles.textTitle, { color: colors.text }]}>
              {screenMessages[mode].title}
            </Text>
            <Text style={[styles.textContent, { color: colors.text }]}>
              {screenMessages[mode].salute}
            </Text>
          </Animated.View>
        </View>
        <Link href="/login" asChild>
          <Button text="Iniciar sesión" variant="primary" />
        </Link>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    zIndex: 99,
    position: 'absolute',
    inset: 0,
    borderTopEndRadius: 56,
    borderTopStartRadius: 56,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  circleCheck: {
    padding: 16,
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: FONT_SIZE.title,
    fontFamily: FONT_FAMILY.extrabold,
    textAlign: 'center',
  },
  textContent: {
    fontSize: FONT_SIZE.base,
    fontFamily: FONT_FAMILY.medium,
    marginTop: 18,
    textAlign: 'center',
  },
});
