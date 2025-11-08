import { redirect } from 'next/navigation';
import routing from '@/i18n/routing';

// Redirect từ root "/" đến locale mặc định
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}

