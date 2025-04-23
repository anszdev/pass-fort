import { useFormStore } from '@/modules/auth/store/formStore';
import { EmailScreen } from '@auth/screens/EmailScreen';

export default function Register() {
  const { mode } = useFormStore();

  return <EmailScreen mode={mode} />;
}
