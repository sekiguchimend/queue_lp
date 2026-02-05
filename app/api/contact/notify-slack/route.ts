import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/app/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL environment variable is not set');
      return NextResponse.json({ success: false, error: 'Slack webhook not configured' }, { status: 500 });
    }

    const inquiryTypeLabels: Record<string, string> = {
      'ai-development': 'AI開発について',
      'llmo': 'LLMOサービスについて',
      'consultation': '導入相談・お見積り',
      'partnership': '協業・パートナーシップ',
      'recruit': '採用について',
      'media': '取材・メディア掲載',
      'other': 'その他',
    };

    const inquiryTypeLabel = inquiryTypeLabels[data.inquiry_type] || data.inquiry_type;

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📩 新しいお問い合わせが届きました',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*会社名:*\n${data.company}`,
            },
            {
              type: 'mrkdwn',
              text: `*お名前:*\n${data.name}`,
            },
            {
              type: 'mrkdwn',
              text: `*メール:*\n${data.email}`,
            },
            {
              type: 'mrkdwn',
              text: `*電話番号:*\n${data.phone || '未入力'}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お問い合わせ項目:*\n${inquiryTypeLabel}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*お問い合わせ内容:*\n${data.message}`,
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
            },
          ],
        },
      ],
    };

    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
    // Return success even if Slack fails, so contact submission doesn't fail
    return NextResponse.json({ success: false, error: 'Slack notification failed' }, { status: 500 });
  }
}
