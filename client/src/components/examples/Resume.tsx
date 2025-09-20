import Resume from '../Resume';
import { LANGUAGES } from '@/lib/constants';

export default function ResumeExample() {
  return <Resume language={LANGUAGES.EN} />;
}