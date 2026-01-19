import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tauktlyjhposmxktqdbh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhdWt0bHlqaHBvc214a3RxZGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTk2MjIsImV4cCI6MjA4NDM5NTYyMn0.EemTw0xSHtYXWq756ySRzCvNaBFAMMS17eYNE4SXim0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

// お問い合わせを送信する関数
export async function submitContact(data: ContactFormData) {
  const { error } = await supabase
    .from('contacts')
    .insert([data]);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}

