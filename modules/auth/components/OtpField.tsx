import { useRef, useState } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useThemeColors } from '@core/hooks/useThemeColors';

type OtpFieldProps = {
  code: string;
  onCodeChange: (code: string) => void;
};

export function OtpField({ code, onCodeChange }: OtpFieldProps) {
  const [currentFocus, setCurrentFocus] = useState<number | null>(null);
  const otpRef = useRef<TextInput[]>([]);
  const { colors } = useThemeColors();

  const inputsSize = 6;

  const handleChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      console.log('pegado');
    }

    const newCode = [...code];

    newCode[index] = text;
    onCodeChange(newCode.join(''));

    if (text && index < inputsSize - 1) {
      setCurrentFocus(index + 1);
      otpRef.current[index + 1]?.focus();
    }
  };

  const handlePasteCode = async () => {
    const clipboardText = await Clipboard.getStringAsync();
    console.log(clipboardText);
  };

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      const newCode = [...code];
      onCodeChange(newCode.join(''));

      otpRef.current[index - 1]?.focus();
      setCurrentFocus(index - 1);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePasteCode}>
      <View style={styles.otpField}>
        {Array.from({ length: inputsSize }).map((_, index) => {
          const currentInputFocused = currentFocus === index;
          const currentInputValue = code[index] ?? '';

          return (
            <View
              key={index}
              style={[
                styles.otp,
                {
                  borderColor:
                    currentInputFocused || currentInputValue !== ''
                      ? colors.secondary
                      : 'transparent',
                },
              ]}
            >
              <TextInput
                value={code[index]}
                keyboardType="numeric"
                maxLength={1}
                ref={(input: any) => (otpRef.current[index] = input!)}
                onChangeText={(text) => handleChangeCode(text, index)}
                onKeyPress={(e) => handleBackspace(e, index)}
                onFocus={() => setCurrentFocus(index)}
                style={[
                  styles.otpInput,
                  { color: colors.text, backgroundColor: colors.inputColor },
                ]}
              />
            </View>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  otpField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otp: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  otpInput: {
    fontSize: 16,
    fontFamily: 'Raleway500',
    textAlign: 'center',
    height: 59.7,
    width: 50,
    borderRadius: 6,
  },
});
