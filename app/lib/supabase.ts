import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tauktlyjhposmxktqdbh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhdWt0bHlqaHBvc214a3RxZGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTk2MjIsImV4cCI6MjA4NDM5NTYyMn0.EemTw0xSHtYXWq756ySRzCvNaBFAMMS17eYNE4SXim0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (url, options = {}) => {
      return fetch(url, { ...options, cache: 'no-store' });
    },
  },
});

// お問い合わせデータの型
export interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone?: string;
  inquiry_type: string;
  message: string;
  privacy_agreed: boolean;
}

// お問い合わせをSlackに通知する関数（API経由でサーバーサイドで実行）
async function notifySlack(data: ContactFormData) {
  try {
    await fetch('/api/contact/notify-slack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    // Slack通知の失敗はログに残すが、お問い合わせ自体は成功させる
    console.error('Failed to send Slack notification:', error);
  }
}

// お問い合わせを送信する関数
export async function submitContact(data: ContactFormData) {
  const { error } = await supabase
    .from('contacts')
    .insert([data]);

  if (error) {
    throw new Error(error.message);
  }

  // Slackに通知を送信（非同期で実行、失敗してもエラーにしない）
  notifySlack(data);

  return { success: true };
}

