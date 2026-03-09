import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "名前が必要です" }, { status: 400 });
    }

    const webhookUrl = process.env.SLACK_QUIZ_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Webhook URLが設定されていません" },
        { status: 500 }
      );
    }

    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `ありがとうございます！当日はありがとうございます\n受験者名: ${name.trim()}`,
      }),
    });

    if (!slackRes.ok) {
      return NextResponse.json(
        { error: "Slack通知に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
