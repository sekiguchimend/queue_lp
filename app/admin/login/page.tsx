'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '@/app/lib/supabase';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // パスワード認証（bcryptで検証）
      const { data, error: queryError } = await supabase
        .from('admin_users')
        .select('id, email, name, password_hash')
        .eq('email', email)
        .single();

      if (queryError || !data) {
        setError('メールアドレスまたはパスワードが正しくありません');
        setIsLoading(false);
        return;
      }

      // パスワード検証（サーバーサイドで行うべきですが、簡易実装）
      const { data: verifyData } = await supabase
        .rpc('verify_password', { 
          password_input: password, 
          password_hash: data.password_hash 
        });

      if (!verifyData) {
        setError('メールアドレスまたはパスワードが正しくありません');
        setIsLoading(false);
        return;
      }

      // セッション保存
      localStorage.setItem('admin_session', JSON.stringify({
        id: data.id,
        email: data.email,
        name: data.name,
        expires: Date.now() + 24 * 60 * 60 * 1000, // 24時間
      }));

      router.push('/admin');
    } catch (err) {
      console.error('Login error:', err);
      setError('ログインに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] sm:max-w-[480px]">
        {/* ロゴ */}
        <div className="text-center mb-8 sm:mb-10">
          <Image
            src="/asset/logo.png"
            alt="QUEUE"
            width={100}
            height={80}
            className="mx-auto h-auto w-[60px] sm:w-[80px]"
          />
          <h1 className="mt-4 sm:mt-6 text-[22px] sm:text-[28px] font-bold text-[#333333]">管理画面ログイン</h1>
        </div>

        {/* ログインフォーム */}
        <div className="bg-white rounded-xl shadow-lg border border-[#e5e5e5] p-6 sm:p-10">
          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-[13px] sm:text-[14px] text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
            <div>
              <label className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-2 sm:mb-3">
                メールアドレス
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full h-[48px] sm:h-[54px] rounded-lg border border-[#e5e5e5] px-4 sm:px-5 text-[14px] sm:text-[15px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-2 sm:mb-3">
                パスワード
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-[48px] sm:h-[54px] rounded-lg border border-[#e5e5e5] px-4 sm:px-5 text-[14px] sm:text-[15px] text-[#333333] outline-none focus:border-[#1f5bb9] transition-colors"
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[50px] sm:h-[58px] bg-[#1f5bb9] text-white text-[14px] sm:text-[16px] font-bold rounded-lg hover:bg-[#1a4f9e] transition-colors disabled:opacity-50"
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>
        </div>

        {/* フッター */}
        <p className="mt-6 text-center text-[11px] sm:text-[12px] text-[#999999]">
          © Queue Inc
        </p>
      </div>
    </div>
  );
}
