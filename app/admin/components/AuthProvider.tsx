'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AdminSession {
  id: string;
  email: string;
  name: string;
  expires: number;
}

interface AuthContextType {
  session: AdminSession | null;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  isLoading: true,
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkSession();
  }, [pathname]);

  const checkSession = () => {
    try {
      const stored = localStorage.getItem('admin_session');
      if (stored) {
        const sessionData: AdminSession = JSON.parse(stored);
        
        // セッション期限チェック
        if (sessionData.expires > Date.now()) {
          setSession(sessionData);
        } else {
          // 期限切れ
          localStorage.removeItem('admin_session');
          setSession(null);
          if (pathname !== '/admin/login') {
            router.push('/admin/login');
          }
        }
      } else {
        setSession(null);
        if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      }
    } catch (error) {
      console.error('Session check error:', error);
      setSession(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    setSession(null);
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ session, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


