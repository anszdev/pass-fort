import { useThemeColors } from '@/modules/core/hooks/useThemeColors';
import { View } from 'react-native';

type StepsProps = {
  steps: number;
  currentStep: number;
};

export function Steps({ steps, currentStep }: StepsProps) {
  const { colors } = useThemeColors();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      {Array.from({ length: steps }).map((_, index) => (
        <View
          style={{
            width: 14,
            height: 14,
            borderRadius: 99,
            backgroundColor:
              index + 1 === currentStep ? colors.secondary : colors.inputColor,
          }}
        ></View>
      ))}
    </View>
  );
}
