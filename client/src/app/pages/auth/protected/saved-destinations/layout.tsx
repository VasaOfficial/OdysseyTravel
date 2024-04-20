'use client'
import { UserAuth } from '@/src/app/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = UserAuth();
  const router = useRouter();

  if (!user) {
    router.push('/pages/auth/login');
    return null; // Immediately return to prevent rendering
  }

  return (
    <div>
      {children}
    </div>
  );
}