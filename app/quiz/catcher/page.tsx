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
    question: "展示会の目的として最もあっているのはどれ？",
    choices: [
      { label: "A", text: "リード数の獲得" },
      { label: "B", text: "契約の締結" },
      { label: "C", text: "商談の成立" },
      { label: "D", text: "アポ数の獲得" },
    ],
    correctLabel: "A",
    explanation:
      "展示会の主な目的はリード（見込み顧客情報）の獲得です。契約や商談はその後のプロセスであり、展示会の場では多くのリードを集めることが最優先です。",
  },
  {
    id: 2,
    question: "ターゲット外の来場者について間違っているのはどれ？",
    choices: [
      { label: "A", text: "報道" },
      { label: "B", text: "広告" },
      { label: "C", text: "出展社" },
      { label: "D", text: "出展者スタッフ" },
    ],
    correctLabel: "B",
    explanation:
      "ターゲット外の来場者としては「報道」「出展社」「出展者スタッフ」が挙げられます。「広告」は来場者の種類ではなく、ターゲット外の分類に該当しません。",
  },
  {
    id: 3,
    question: "声かけのタイミングとして推奨されているのは？",
    choices: [
      { label: "A", text: "来場者が5m先にいるとき" },
      { label: "B", text: "来場者が3m先にいるとき" },
      { label: "C", text: "来場者が1m先にいるとき" },
      { label: "D", text: "来場者がブースの真横を通り過ぎたとき" },
    ],
    correctLabel: "B",
    explanation:
      "3m先のタイミングが推奨されています。5mでは遠すぎて声が届きにくく、1mや真横では反応する余裕がなく通り過ぎてしまいます。",
  },
  {
    id: 4,
    question:
      "トークスクリプトにおける「フットインザドア」とは何ですか？",
    choices: [
      { label: "A", text: "大きな依頼から小さな依頼へ下げること" },
      { label: "B", text: "小さな依頼から始めて大きな要求につなげること" },
      { label: "C", text: "無理に相手をブースに引き込むこと" },
      { label: "D", text: "名刺交換を断らせないようにすること" },
    ],
    correctLabel: "B",
    explanation:
      "フットインザドア（FITD）は、まず小さな依頼（例：「1分だけ」「ちょっと見てください」）に応じてもらい、段階的に大きな要求（名刺交換・アポ）につなげる心理テクニックです。",
  },
  {
    id: 5,
    question: "トークの流れで最初に行うべきことは？",
    choices: [
      { label: "A", text: "興味づけ" },
      { label: "B", text: "認知（注意を引く）" },
      { label: "C", text: "FITD" },
      { label: "D", text: "ターゲットトーク" },
    ],
    correctLabel: "B",
    explanation:
      "トークの流れはまず「認知（注意を引く）」から始まります。来場者にこちらの存在を認知してもらわなければ、興味づけもFITDもターゲットトークも始められません。",
  },
  {
    id: 6,
    question: "名刺交換の基本的なフローで間違っているのは？",
    choices: [
      { label: "A", text: "Eightで名刺を読み込みメモ記入" },
      { label: "B", text: "会期後にCSV出力&Excel変換" },
      { label: "C", text: "メモをExcelに入力" },
      { label: "D", text: "会期中は名刺を破棄して持ち帰らない" },
    ],
    correctLabel: "D",
    explanation:
      "名刺は重要なリード情報です。会期中に破棄するのは絶対にNGです。Eightで読み込み→メモ記入→会期後にCSV出力→Excelに整理が正しいフローです。",
  },
  {
    id: 7,
    question: "来場者証のQRコードでできることはどれ？",
    choices: [
      { label: "A", text: "会社ロゴのダウンロード" },
      { label: "B", text: "来場者データの取得" },
      { label: "C", text: "イベント入退場の記録" },
      { label: "D", text: "商談予約の自動登録" },
    ],
    correctLabel: "B",
    explanation:
      "来場者証のQRコードをスキャンすることで、来場者の名前・会社名・連絡先などのデータを取得できます。名刺交換の代替・補完手段として活用できます。",
  },
  {
    id: 8,
    question:
      "キャッチャースクリプトで最初に推奨される声掛けの一例はどれですか？",
    choices: [
      { label: "A", text: "「後日ご連絡しますね」" },
      { label: "B", text: "「こんにちは！1分だけうちの会社の説明させてください！」" },
      { label: "C", text: "「このイベント楽しいですね！」" },
      { label: "D", text: "「ノーコードってご存じですか？」" },
    ],
    correctLabel: "D",
    explanation:
      "相手の関心を引く質問形式の声掛けが効果的です。「ノーコードってご存じですか？」のように、相手が思わず立ち止まって考える問いかけが推奨されます。一方的な説明や雑談は効果が薄いです。",
  },
  {
    id: 9,
    question: "引き継ぎができない場合の対応として正しいものは？",
    choices: [
      { label: "A", text: "すぐに話題を変える" },
      { label: "B", text: "別のスタッフに任せる" },
      { label: "C", text: "自分から説明を続ける" },
      { label: "D", text: "名刺交換だけして終える" },
    ],
    correctLabel: "C",
    explanation:
      "クローザーへの引き継ぎができない場合は、自分自身で説明を続けることが正しい対応です。話題を変えたり名刺交換だけで終わらせると、せっかくのリードを逃してしまいます。",
  },
  {
    id: 10,
    question:
      "クローザースクリプトで名刺交換を打診する適切な場面は？",
    choices: [
      { label: "A", text: "こちらが話を始めた直後" },
      { label: "B", text: "相手が目的を話した後" },
      { label: "C", text: "相手が疲れている時" },
      { label: "D", text: "説明を断られた時" },
    ],
    correctLabel: "B",
    explanation:
      "相手が来場目的や課題を話してくれた後が名刺交換の最適なタイミングです。相手のニーズを理解した上で打診することで、自然な流れで交換に応じてもらえます。",
  },
  {
    id: 11,
    question: "アポ打診のタイミングとして正しいものは？",
    choices: [
      { label: "A", text: "相手が名刺交換を打診してきたとき" },
      { label: "B", text: "相手が会話を切り上げようとしたとき" },
      { label: "C", text: "こちらから一方的に依頼したとき" },
      { label: "D", text: "展示会終了後に初めて連絡したとき" },
    ],
    correctLabel: "A",
    explanation:
      "相手から名刺交換を打診してきたタイミングは、相手の関心が最も高い瞬間です。このタイミングでアポを打診することで、承諾率が大幅に上がります。",
  },
];

export default function CatcherQuizPage() {
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
        body: JSON.stringify({ name: fullName.trim() }),
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
          background: "linear-gradient(135deg, #e65100 0%, #ff8f00 100%)",
        }}
        className="py-8 px-4 text-center text-white"
      >
        <h1
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          キャッチャー営業確認テスト
        </h1>
        <p className="text-base md:text-lg opacity-90">全11問</p>
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
                  (e.target.style.borderColor = "#e65100")
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
                    : "linear-gradient(135deg, #e65100 0%, #ff8f00 100%)",
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
                  style={{ background: "#e65100" }}
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
                    bg = "#fff7ed";
                    border = "2px solid #e65100";
                    textColor = "#9a3412";
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
                  ? "linear-gradient(135deg, #e65100 0%, #ff8f00 100%)"
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
                    "linear-gradient(135deg, #e65100 0%, #ff8f00 100%)",
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
