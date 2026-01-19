import Image from "next/image";

export default function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #c8cfe0 0%, #b8c4d8 100%)' }}
    >
      {/* 背景画像 - モバイル用 */}
      <img
        src="/asset/problem-background.png"
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden w-full"
        style={{ transformOrigin: 'top center', transform: 'scale(2.5)' }}
      />
      {/* 背景画像 - デスクトップ用 */}
      <img
        src="/asset/problem-background.png"
        alt=""
        className="absolute top-0 left-0 hidden md:block w-full h-auto"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
        <div className="text-center text-[#3a3a3a]">
          <p className="text-[28px] md:text-[28px] font-bold">Problem</p>
          <p className="mt-2 md:mt-3 text-[14px] md:text-sm font-medium text-[#4a4a4a]">こんな課題はありませんか</p>
        </div>

        {/* モバイル用レイアウト */}
        <div className="md:hidden relative mt-6 h-[600px]">
          {/* 左上: ChatGPTで */}
          <div className="absolute left-[-10px] top-0 h-[150px] w-[200px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] font-semibold text-[#434343] leading-[160%]">
              ChatGPTで
              <br />
              自社名・サービス名が
              <br />
              出てこない
            </p>
          </div>

          {/* 右上: AI検索での */}
          <div className="absolute right-[-10px] top-[100px] h-[140px] w-[190px]">
            <Image src="/asset/cloud-blue-1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] font-semibold text-[#434343] leading-[160%]">
              AI検索での
              <br />
              自社の見られ方が
              <br />
              不明
            </p>
          </div>

          {/* 左中: 競合他社ばかりが */}
          <div className="absolute left-[-10px] top-[200px] h-[150px] w-[200px]">
            <Image src="/asset/cloud-blue-2.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] font-semibold text-[#434343] leading-[160%]">
              競合他社ばかりが
              <br />
              AI検索で比較・推薦
              <br />
              されている
            </p>
          </div>

          {/* 右下: SEOの次に */}
          <div className="absolute right-[-10px] top-[300px] h-[140px] w-[190px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[13px] font-semibold text-[#434343] leading-[160%]">
              SEOの次に
              <br />
              何をやるべきか
              <br />
              分からない
            </p>
          </div>

          {/* 悩む人のイラスト */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[280px]">
            <Image
              src="/asset/worried-person.png"
              alt="悩む人"
              width={280}
              height={260}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* デスクトップ用レイアウト */}
        <div className="hidden md:block relative mx-auto mt-10 h-[420px] w-full max-w-[1000px]">
          <Image
            src="/asset/悩む人のイラスト.png"
            alt="悩む人"
            width={280}
            height={260}
            className="absolute left-1/2 top-[120px] -translate-x-1/2"
          />

          <div className="absolute left-[20px] top-[30px] h-[180px] w-[280px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              ChatGPTで
              <br />
              自社名・サービス名が
              <br />
              出てこない
            </p>
          </div>

          <div className="absolute left-[80px] bottom-[15px] h-[170px] w-[260px]">
            <Image src="/asset/cloud-blue-2.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              競合他社ばかりが
              <br />
              AI検索で比較・推薦
              <br />
              されている
            </p>
          </div>

          <div className="absolute right-[40px] top-[60px] h-[170px] w-[260px]">
            <Image src="/asset/cloud-blue-1.png" alt="" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-semibold text-[#434343]">
              AI検索での
              <br />
              自社の見られ方が
              <br />
              不明
            </p>
          </div>

          <div className="absolute right-[20px] bottom-[10px] h-[180px] w-[280px]">
            <Image src="/asset/cloud-white.png" alt="" fill className="object-contain" />
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
