import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, quizType, score, totalQuestions } = await req.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "名前が必要です" }, { status: 400 });
    }

    // Supabaseに保存
    await supabase.from("quiz_results").insert([
      {
        name: name.trim(),
        quiz_type: quizType || "unknown",
        score: score ?? 0,
        total_questions: totalQuestions ?? 0,
      },
    ]);

    // Slack通知
    const webhookUrl = process.env.SLACK_QUIZ_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `ありがとうございます！当日はありがとうございます\n受験者名: ${name.trim()}\nテスト: ${quizType || "不明"}\nスコア: ${score}/${totalQuestions}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
