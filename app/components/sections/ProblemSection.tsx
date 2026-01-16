import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="problem-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px]">
        <Image
          src="/asset/Problem.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-20">
        <div className="text-center text-[#3a3a3a]">
          <p className="text-[28px] font-semibold">Problem</p>
          <p className="mt-3 text-sm text-[#4a4a4a]">こんな課題はありませんか</p>
        </div>

        <div className="relative mx-auto mt-10 h-[420px] w-full max-w-[1000px]">
          <Image
            src="/asset/悩む人のイラスト.png"
            alt="悩む人"
            width={280}
            height={260}
            className="absolute left-1/2 top-[120px] -translate-x-1/2"
          />

          <div className="absolute left-[20px] top-[30px] h-[150px] w-[240px]">
            <Image src="/asset/アセット 1@2x 1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              ChatGPTで
              <br />
              自社名・サービス名が
              <br />
              出てこない
            </p>
          </div>

          <div className="absolute left-[80px] bottom-[15px] h-[140px] w-[220px]">
            <Image src="/asset/アセット 2@2x 2.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              競合他社ばかりが
              <br />
              AI検索で比較・推薦
              <br />
              されている
            </p>
          </div>

          <div className="absolute right-[40px] top-[60px] h-[140px] w-[220px]">
            <Image src="/asset/アセット 2@2x 1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              AI検索での
              <br />
              自社の見られ方が
              <br />
              不明
            </p>
          </div>

          <div className="absolute right-[20px] bottom-[10px] h-[150px] w-[240px]">
            <Image src="/asset/アセット 1@2x 1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              SEOの次に
              <br />
              何をやるべきか
              <br />
              分からない
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
