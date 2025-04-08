import { Text, View } from 'react-native';
import { Field } from '@core/components/Field';
import { Button } from '@core/components/Button';
import { FormContainer } from '@auth/components/FormContainer';
import { FormTitle } from '@auth/components/FormTitle';
import { Steps } from '@auth/components/Steps';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { ShieldCheck } from '@/modules/core/components/Icons';
import { Link } from 'expo-router';

export default function Password() {
  const { colors } = useThemeColors();
  const congratulationView = useSharedValue(0);
  const congratulationCheck = useSharedValue(0);
  const congratulationCheckCircle = useSharedValue(0);
  const congratulationCheckCircle2 = useSharedValue(0);

  const congratulationStyle = useAnimatedStyle(() => ({
    top: withTiming(congratulationView.value === 1 ? 40 : 720, {
      duration: 400,
      easing: Easing.out(Easing.exp),
    }),
  }));

  const congratulationCheckStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
      250,
      withTiming(congratulationCheck.value === 1 ? 1 : 0, {
        duration: 300,
        easing: Easing.out(Easing.circle),
      })
    ),
  }));

  const congratulationCheckCircle2Style = useAnimatedStyle(() => ({
    opacity: withDelay(
      300,
      withTiming(congratulationCheckCircle.value === 1 ? 1 : 0, {
        duration: 300,
        easing: Easing.out(Easing.circle),
      })
    ),
  }));

  const congratulationCheckCircleStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
      350,
      withTiming(congratulationCheckCircle.value === 1 ? 1 : 0, {
        duration: 300,
        easing: Easing.out(Easing.circle),
      })
    ),
  }));

  const createAccount = () => {
    congratulationView.value = 1;
    congratulationCheck.value = 1;
    congratulationCheckCircle.value = 1;
    congratulationCheckCircle2.value = 1;
    console.log('contraseña confirmada');
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Animated.View
        style={[
          {
            zIndex: 99,
            backgroundColor: colors.secondaryBackground,
            position: 'absolute',
            inset: 0,
            height: '100%',
            width: '120%',
            margin: 'auto',
            marginHorizontal: -40,
            borderTopEndRadius: 130,
            borderTopStartRadius: 130,
          },
          congratulationStyle,
        ]}
      >
        <Animated.View style={[{ flex: 1, justifyContent: 'center' }]}>
          <Animated.View
            style={[
              {
                padding: 14,
                alignItems: 'center',
                borderWidth: 6,
                borderColor: colors.primary,
                borderRadius: 100,
                alignSelf: 'center',
              },
              congratulationCheckCircle2Style,
            ]}
          >
            <Animated.View
              style={[
                {
                  padding: 12,
                  alignItems: 'center',
                  borderWidth: 6,
                  borderColor: colors.secondary,
                  borderRadius: 100,
                  alignSelf: 'center',
                },
                congratulationCheckCircleStyle,
              ]}
            >
              <ShieldCheck color={colors.text} size={120} />
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              {
                marginTop: 24,
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '85%',
                paddingHorizontal: 16,
                alignSelf: 'center',
              },
              congratulationCheckStyle,
            ]}
          >
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'Raleway900',
                color: colors.text,
              }}
            >
              Felicidades
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Raleway600',
                marginTop: 8,
                marginBottom: 24,
                color: colors.text,
              }}
            >
              Tu cuenta ha sido creada! 🫡
            </Text>
            <Link href="/login" asChild>
              <Button text="Iniciar sesión" variant="primary" />
            </Link>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <FormContainer
        formFooter={
          <>
            <Steps steps={3} currentStep={3} />
            <Button
              text="Crear Cuenta"
              variant="primary"
              width="fit"
              onPress={createAccount}
            />
          </>
        }
      >
        <FormTitle title="Crea y confirma tu contraseña" salute="Hey 🤐" />
        <View style={{ gap: 24, marginTop: 46 }}>
          <Field
            label="Contraseña"
            icon="lock"
            textContentType="password"
            secureTextEntry
          />
          <Field
            label="Confirma la contraseña"
            icon="lock"
            textContentType="password"
            secureTextEntry
          />
        </View>
      </FormContainer>
    </View>
  );
}
