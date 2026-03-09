"use client";

import { useState } from "react";

type Question = {
  id: number;
  question: string;
  choices: { label: string; text: string }[];
  correctLabel: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question:
      "umoren.aiが目指す成果として最も正しいものはどれですか？",
    choices: [
      { label: "A", text: "AI検索での表示回数を増やす" },
      { label: "B", text: "AIに「おすすめ」として名指しされ、問い合わせ・商談につながる状態をつくる" },
      { label: "C", text: "従来のSEOランキングを上位にする" },
      { label: "D", text: "SNSでのブランド認知を高める" },
    ],
    correctLabel: "B",
    explanation:
      "「引用されるだけ」ではなく、比較検討の選択肢に入り、問い合わせ・商談につながることが目的です。",
  },
  {
    id: 2,
    question:
      "2030年までに検索全体の何%がAI検索へ移行すると予測されていますか？",
    choices: [
      { label: "A", text: "35%" },
      { label: "B", text: "50%" },
      { label: "C", text: "60%" },
      { label: "D", text: "80%" },
    ],
    correctLabel: "C",
    explanation:
      "2030年には検索全体の約60%がAI検索へ移行すると予測されています（Gartner調査より）。",
  },
  {
    id: 3,
    question:
      "現在、法人としてAI検索対策に取り組んでいる企業の割合はどれくらいですか？",
    choices: [
      { label: "A", text: "約5%" },
      { label: "B", text: "約18%" },
      { label: "C", text: "約35%" },
      { label: "D", text: "約50%" },
    ],
    correctLabel: "B",
    explanation:
      "AI検索対策に取り組んでいる法人はたったの18%。裏を返せば、今すぐ始めることで大きく差別化できます。",
  },
  {
    id: 4,
    question:
      "umoren.aiのサービスが「向いていないケース」はどれですか？",
    choices: [
      { label: "A", text: "BtoBで比較検討が発生する商材" },
      { label: "B", text: "指名・相談・資料請求を増やしたい会社" },
      { label: "C", text: "即売・衝動買い中心の商材" },
      { label: "D", text: "SEOはやっているがAIでは出てこない会社" },
    ],
    correctLabel: "C",
    explanation:
      "即売・衝動買い中心の商材、LPが未整理の場合、短期CV広告目的は向いていないケースとされています。",
  },
  {
    id: 5,
    question:
      "AI検索における「2つの露出戦略」として正しい組み合わせはどれですか？",
    choices: [
      { label: "A", text: "価格訴求軸 ／ 口コミ軸" },
      { label: "B", text: "企業・提供元軸 ／ サービス・ブランド軸" },
      { label: "C", text: "SEO軸 ／ SNS軸" },
      { label: "D", text: "国内向け軸 ／ 海外向け軸" },
    ],
    correctLabel: "B",
    explanation:
      "「どの会社が強いか」を推薦させる企業・提供元軸と、「どのサービスがおすすめか」を推薦させるサービス・ブランド軸の2つが戦略の柱です。",
  },
  {
    id: 6,
    question:
      "AIに信頼される「一次情報」として含まれないものはどれですか？",
    choices: [
      { label: "A", text: "導入社数やCV改善率などの数値実績" },
      { label: "B", text: "サービスの特徴・強み" },
      { label: "C", text: "経営者のSNSフォロワー数" },
      { label: "D", text: "過去の事例・評価" },
    ],
    correctLabel: "C",
    explanation:
      "AIに信頼される一次情報は、数値実績・強み・事例・評価・利用シーンなど具体的な根拠となる情報です。フォロワー数は含まれません。",
  },
  {
    id: 7,
    question:
      "umoren.aiのツール（プラットフォーム）と伴走支援の料金として正しいものはどれですか？",
    choices: [
      { label: "A", text: "ツール月額5万円〜 ／ 伴走支援月額20万円〜" },
      { label: "B", text: "ツール月額20万円〜 ／ 伴走支援月額40万円〜" },
      { label: "C", text: "どちらも月額10万円均一" },
      { label: "D", text: "初期費用のみで月額費用なし" },
    ],
    correctLabel: "B",
    explanation:
      "ツール（プラットフォーム）の月額プランは20万円〜（内容・対象範囲により変動）、伴走支援は月額40万円〜となります。まず無料診断から始めることもできます。",
  },
  {
    id: 8,
    question:
      "「AI検索診断ツール」と「伴走支援」の使い分けとして正しいのはどれですか？",
    choices: [
      { label: "A", text: "伴走支援は無料、診断ツールは有料" },
      { label: "B", text: "社内で改善できる体制があればツール、体制が薄く最短で成果を出したいなら伴走支援" },
      { label: "C", text: "伴走支援はAIのみ対応、ツールは人が対応" },
      { label: "D", text: "どちらも同じ機能で違いはない" },
    ],
    correctLabel: "B",
    explanation:
      "診断ツールは現状把握・社内改善向け、伴走支援は設計・制作・技術実装まで一緒に進める支援です。両方の組み合わせも可能です。",
  },
  {
    id: 9,
    question:
      "umoren.aiのツール（プラットフォーム）は月額いくらからですか？",
    choices: [
      { label: "A", text: "月額5万円〜" },
      { label: "B", text: "月額10万円〜" },
      { label: "C", text: "月額20万円〜" },
      { label: "D", text: "月額50万円〜" },
    ],
    correctLabel: "C",
    explanation:
      "ツール（プラットフォーム）の月額プランは20万円〜です。対象範囲や内容により変動します。まず無料診断で現状を把握してからの検討も可能です。",
  },
  {
    id: 10,
    question:
      "umoren.aiの伴走支援（コンサルティング）は月額いくらからですか？",
    choices: [
      { label: "A", text: "月額10万円〜" },
      { label: "B", text: "月額20万円〜" },
      { label: "C", text: "月額30万円〜" },
      { label: "D", text: "月額40万円〜" },
    ],
    correctLabel: "D",
    explanation:
      "伴走支援は月額40万円〜です。設計・コンテンツ制作・技術実装まで一貫して対応するため、ツールより上位の支援となります。",
  },
  {
    id: 11,
    question:
      "umoren.aiの契約形態として正しいものはどれですか？",
    choices: [
      { label: "A", text: "ツールのみの契約しかできない" },
      { label: "B", text: "伴走支援（コンサル）のみの契約しかできない" },
      { label: "C", text: "ツールのみ・伴走支援のみ・両方の組み合わせ、いずれも対応可能" },
      { label: "D", text: "必ずツールと伴走支援をセットで契約しなければならない" },
    ],
    correctLabel: "C",
    explanation:
      "ツールのみ・伴走支援のみ・両方の組み合わせ、いずれも対応しています。社内体制や目的に合わせて選べます。迷う場合は無料相談で一緒に判断します。",
  },
  {
    id: 12,
    question:
      "初めてumoren.aiに問い合わせる場合、最初のステップとして推奨されているのはどれですか？",
    choices: [
      { label: "A", text: "いきなり伴走支援を契約する" },
      { label: "B", text: "無料診断（AI検索での現状把握）から始める" },
      { label: "C", text: "ツールを1年契約で申し込む" },
      { label: "D", text: "競合他社と比較してから決める" },
    ],
    correctLabel: "B",
    explanation:
      "まず無料診断で「AI検索でどこで損しているか」を可視化し、その後に「何を直せば問い合わせにつながるか」を相談で整理するのが推奨ステップです。初期診断は無料・登録不要で3分程度で完了します。",
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [fullName, setFullName] = useState("");
  const [nameSent, setNameSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSelect = (questionId: number, label: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctLabel) correct++;
    }
    setScore(correct);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setFullName("");
    setNameSent(false);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendName = async () => {
    if (!fullName.trim()) {
      setError("お名前を入力してください");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/quiz/slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName.trim(), quizType: "umoren.ai サービス理解度テスト", score, totalQuestions: questions.length }),
      });
      if (!res.ok) throw new Error();
      setNameSent(true);
    } catch {
      setError("送信に失敗しました。もう一度お試しください。");
    } finally {
      setSending(false);
    }
  };

  const isPerfect = score === questions.length;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen" style={{ background: "#f5f6f8" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1f5bb9 0%, #6a3ec8 100%)",
        }}
        className="py-8 px-4 text-center text-white"
      >
        <h1
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          umoren.ai サービス理解度テスト
        </h1>
        <p className="text-base md:text-lg opacity-90">全12問</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Result Banner */}
        {submitted && (
          <div
            className="rounded-xl p-6 mb-8 text-center shadow-lg"
            style={{
              background: isPerfect
                ? "linear-gradient(135deg, #059669 0%, #10b981 100%)"
                : "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              color: "#fff",
            }}
          >
            <p className="text-4xl font-bold mb-2">
              {score} / {questions.length}
            </p>
            <p className="text-xl font-semibold mb-1">
              {isPerfect ? "満点合格です！" : "不合格"}
            </p>
            {!isPerfect && (
              <p className="text-sm opacity-90">
                全問正解で合格です。間違えた問題を確認してリトライしましょう。
              </p>
            )}
          </div>
        )}

        {/* Perfect Score - Name Form */}
        {submitted && isPerfect && !nameSent && (
          <div
            className="rounded-xl p-6 mb-8 shadow-lg"
            style={{ background: "#fff", border: "2px solid #059669" }}
          >
            <h2
              className="text-lg font-bold mb-4 text-center"
              style={{ color: "#333" }}
            >
              お名前（フルネーム・本名）を入力してください
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="例: 山田 太郎"
                className="flex-1 px-4 py-3 rounded-lg text-base"
                style={{
                  border: "2px solid #d1d5db",
                  outline: "none",
                  color: "#333",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#1f5bb9")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "#d1d5db")
                }
              />
              <button
                onClick={handleSendName}
                disabled={sending}
                className="px-6 py-3 rounded-lg font-bold text-white text-base cursor-pointer"
                style={{
                  background: sending
                    ? "#9ca3af"
                    : "linear-gradient(135deg, #1f5bb9 0%, #6a3ec8 100%)",
                  border: "none",
                }}
              >
                {sending ? "送信中..." : "送信する"}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm" style={{ color: "#dc2626" }}>
                {error}
              </p>
            )}
          </div>
        )}

        {/* Name Sent Confirmation */}
        {nameSent && (
          <div
            className="rounded-xl p-6 mb-8 text-center shadow-lg"
            style={{ background: "#fff", border: "2px solid #059669" }}
          >
            <p className="text-xl font-bold" style={{ color: "#059669" }}>
              送信完了しました！ありがとうございます。
            </p>
          </div>
        )}

        {/* Questions */}
        {questions.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctLabel;

          return (
            <div
              key={q.id}
              className="rounded-xl p-5 md:p-6 mb-5 shadow-sm"
              style={{
                background: "#fff",
                border: submitted
                  ? isCorrect
                    ? "2px solid #059669"
                    : "2px solid #dc2626"
                  : "1px solid #e5e7eb",
              }}
            >
              <p
                className="font-bold text-base md:text-lg mb-4"
                style={{ color: "#333" }}
              >
                <span
                  className="inline-block mr-2 px-2 py-0.5 rounded text-sm text-white"
                  style={{ background: "#1f5bb9" }}
                >
                  Q{idx + 1}
                </span>
                {q.question}
              </p>

              <div className="space-y-2">
                {q.choices.map((c) => {
                  const isSelected = userAnswer === c.label;
                  const isThisCorrect = c.label === q.correctLabel;

                  let bg = "#f9fafb";
                  let border = "1px solid #e5e7eb";
                  let textColor = "#333";

                  if (submitted) {
                    if (isThisCorrect) {
                      bg = "#ecfdf5";
                      border = "2px solid #059669";
                      textColor = "#065f46";
                    } else if (isSelected && !isThisCorrect) {
                      bg = "#fef2f2";
                      border = "2px solid #dc2626";
                      textColor = "#991b1b";
                    }
                  } else if (isSelected) {
                    bg = "#eff6ff";
                    border = "2px solid #1f5bb9";
                    textColor = "#1e40af";
                  }

                  return (
                    <button
                      key={c.label}
                      onClick={() => handleSelect(q.id, c.label)}
                      disabled={submitted}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm md:text-base transition-all"
                      style={{
                        background: bg,
                        border,
                        color: textColor,
                        cursor: submitted ? "default" : "pointer",
                      }}
                    >
                      <span className="font-bold mr-2">{c.label}.</span>
                      {c.text}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className="mt-3 p-3 rounded-lg text-sm"
                  style={{
                    background: isCorrect ? "#ecfdf5" : "#fef2f2",
                    color: isCorrect ? "#065f46" : "#991b1b",
                  }}
                >
                  <span className="font-bold">
                    {isCorrect ? "正解！" : `不正解（正解: ${q.correctLabel}）`}
                  </span>{" "}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {/* Action Buttons */}
        <div className="text-center py-6">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-10 py-4 rounded-xl font-bold text-white text-lg cursor-pointer transition-opacity"
              style={{
                background: allAnswered
                  ? "linear-gradient(135deg, #1f5bb9 0%, #6a3ec8 100%)"
                  : "#9ca3af",
                border: "none",
                opacity: allAnswered ? 1 : 0.7,
              }}
            >
              採点する
            </button>
          ) : (
            !isPerfect && (
              <button
                onClick={handleRetry}
                className="px-10 py-4 rounded-xl font-bold text-white text-lg cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #1f5bb9 0%, #6a3ec8 100%)",
                  border: "none",
                }}
              >
                リトライする
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
