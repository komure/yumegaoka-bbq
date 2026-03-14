"use client";

import { useState } from "react";

// ── ナビゲーション ──────────────────────────────────────────
function Nav() {
  const links = [
    { href: "#features", label: "特徴" },
    { href: "#pricing", label: "料金" },
    { href: "#access", label: "アクセス" },
    { href: "#reservation", label: "予約" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="font-bold text-green-700 text-lg">🔥 ゆめが丘BBQ</span>
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-green-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservation"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
        >
          予約する
        </a>
      </div>
    </header>
  );
}

// ── ヒーロー ────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-amber-600" />
      {/* 装飾円 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orange-400/10 rounded-full" />

      <div className="relative text-center text-white px-4 max-w-3xl mx-auto">
        {/* バッジ */}
        <span className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-6 tracking-wider">
          横浜・下飯田 / 手ぶらでOK
        </span>

        {/* キャッチコピー */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          空の下で、<br />
          最高の<span className="text-orange-300">炎</span>を囲もう。
        </h1>
        <p className="text-lg sm:text-xl text-green-100 mb-10 leading-relaxed">
          ゆめが丘BBQは、横浜の自然の中で<br className="hidden sm:block" />
          気軽に楽しめるバーベキュー場です。<br />
          機材はすべて完備。隣のモールで食材も揃う。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservation"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            今すぐ予約する →
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            詳しく見る
          </a>
        </div>

        {/* 料金ハイライト */}
        <div className="mt-14 inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
          <span className="text-4xl font-extrabold text-orange-300">¥1,500</span>
          <span className="text-green-100 text-left text-sm leading-snug">
            おひとり様<br />3時間（昼・夜 2部制）
          </span>
        </div>
      </div>

      {/* 下スクロール矢印 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 text-2xl">
        ↓
      </div>
    </section>
  );
}

// ── 特徴 ────────────────────────────────────────────────────
const features = [
  {
    icon: "🛒",
    title: "食材の買い出しが超便利",
    desc: "隣接する大型ショッピングモール「ソラトス」で食材・飲み物をその場で調達できます。手ぶらで来ても安心！",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🔥",
    title: "機材はすべてお任せ",
    desc: "焚き火台・椅子・テーブルを完全完備。手ぶらでお越しください。食材だけ持ってくれば即スタートできます。",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    icon: "🚉",
    title: "駅チカで好アクセス",
    desc: "相鉄いずみ野線「下飯田駅」から徒歩わずか10分。車がなくてもOK。横浜市内からでも気軽に来られます。",
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100",
  },
  {
    icon: "⏰",
    title: "昼・夜の2部制で使いやすい",
    desc: "昼の部・夜の部から選べる2部制。ランチBBQも夕焼けBBQもどちらも楽しめます。",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading label="おすすめポイント" title="ゆめが丘BBQが選ばれる理由" />
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`border rounded-2xl p-6 flex gap-5 items-start ${f.color} transition-transform hover:-translate-y-1 duration-200`}
            >
              <div className={`${f.iconBg} rounded-xl p-3 text-3xl shrink-0`}>{f.icon}</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 料金 ────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading label="料金・利用時間" title="シンプルな料金体系" />

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <PricingCard
            emoji="☀️"
            label="昼の部"
            timeRange="11:00 〜 14:00"
            price="1,500"
            accent="bg-amber-500"
            border="border-amber-300"
            bg="bg-amber-50"
          />
          <PricingCard
            emoji="🌙"
            label="夜の部"
            timeRange="17:00 〜 20:00"
            price="1,500"
            accent="bg-indigo-500"
            border="border-indigo-300"
            bg="bg-indigo-50"
          />
        </div>

        <div className="mt-10 max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-6 text-sm text-gray-700 space-y-2">
          <p className="font-bold text-green-800 text-base mb-3">含まれるもの（手ぶらセット）</p>
          {["焚き火台（バーベキューグリル）", "椅子・テーブル", "着火剤・炭", "トング・網"].map((item) => (
            <p key={item} className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span> {item}
            </p>
          ))}
          <p className="pt-2 text-gray-500 text-xs">
            ※食材・飲み物はお客様でご用意ください（隣のソラトスで購入可）
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  emoji,
  label,
  timeRange,
  price,
  accent,
  border,
  bg,
}: {
  emoji: string;
  label: string;
  timeRange: string;
  price: string;
  accent: string;
  border: string;
  bg: string;
}) {
  return (
    <div className={`${bg} border-2 ${border} rounded-2xl overflow-hidden text-center`}>
      <div className={`${accent} text-white py-3 font-bold text-lg`}>
        {emoji} {label}
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-1">利用時間</p>
        <p className="font-bold text-gray-800 text-xl mb-5">{timeRange}</p>
        <p className="text-gray-500 text-sm">料金（お一人様）</p>
        <p className="text-5xl font-extrabold text-gray-900 mt-1">
          ¥{price}
          <span className="text-base font-normal text-gray-500"> / 3時間</span>
        </p>
      </div>
    </div>
  );
}

// ── アクセス ────────────────────────────────────────────────
function Access() {
  return (
    <section id="access" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading label="アクセス" title="場所・行き方" />

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          {/* 地図プレースホルダー */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-green-100 aspect-[4/3] flex flex-col items-center justify-center text-center p-8 border-2 border-green-200">
            <span className="text-6xl mb-4">🗺️</span>
            <p className="font-bold text-green-800 text-lg">ゆめが丘BBQ</p>
            <p className="text-green-700 text-sm mt-1">神奈川県横浜市</p>
            <a
              href="https://maps.google.com/?q=下飯田駅+横浜市"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
            >
              Google マップで開く →
            </a>
          </div>

          {/* アクセス情報 */}
          <div className="space-y-5">
            <AccessItem icon="🚉" label="最寄り駅">
              相鉄いずみ野線「下飯田駅」<br />
              <span className="font-bold text-orange-600">徒歩10分</span>
            </AccessItem>
            <AccessItem icon="📍" label="住所">
              神奈川県横浜市<br />
              <span className="text-gray-500 text-sm">（詳細は予約確認メールにてご案内）</span>
            </AccessItem>
            <AccessItem icon="🛒" label="隣接施設">
              大型ショッピングモール「<span className="font-bold">ソラトス</span>」<br />
              <span className="text-gray-500 text-sm">食材・飲み物の調達に便利です</span>
            </AccessItem>
            <AccessItem icon="🅿️" label="駐車場">
              ソラトス駐車場をご利用ください<br />
              <span className="text-gray-500 text-sm">（利用条件はソラトスの規定に準じます）</span>
            </AccessItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessItem({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="bg-white border border-gray-200 rounded-xl w-11 h-11 flex items-center justify-center text-xl shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-gray-700 leading-relaxed text-sm">{children}</p>
      </div>
    </div>
  );
}

// ── 予約フォーム ────────────────────────────────────────────
function Reservation() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    people: "2",
    session: "lunch",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="py-24 bg-gradient-to-br from-green-800 to-amber-700">
      <div className="max-w-xl mx-auto px-4">
        <SectionHeading label="ご予約" title="予約フォーム" dark />

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-xl">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">予約を受け付けました！</h3>
            <p className="text-gray-600 mb-6">
              ご予約ありがとうございます。<br />
              確認メールをお送りしますので、しばらくお待ちください。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-green-600 font-bold underline text-sm"
            >
              別の日程を予約する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-5">
            {/* 氏名 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                お名前 <Required />
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="山田 太郎"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* 日付 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                利用日 <Required />
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* 人数 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                人数 <Required />
              </label>
              <select
                name="people"
                value={form.people}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {[...Array(19)].map((_, i) => (
                  <option key={i + 2} value={String(i + 2)}>
                    {i + 2}名
                  </option>
                ))}
                <option value="20">20名以上（要相談）</option>
              </select>
            </div>

            {/* 昼夜選択 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                ご利用の部 <Required />
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "lunch", emoji: "☀️", label: "昼の部", time: "11:00〜14:00" },
                  { value: "dinner", emoji: "🌙", label: "夜の部", time: "17:00〜20:00" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex flex-col items-center gap-1 border-2 rounded-xl p-3 cursor-pointer transition-all ${
                      form.session === opt.value
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="session"
                      value={opt.value}
                      checked={form.session === opt.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="font-bold text-gray-800 text-sm">{opt.label}</span>
                    <span className="text-gray-500 text-xs">{opt.time}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 備考 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">備考・ご要望</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="アレルギー・その他ご要望があればお書きください"
                rows={3}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
            >
              🔥 予約を申し込む
            </button>

            <p className="text-xs text-gray-400 text-center">
              ご予約確認後、担当者よりご連絡いたします。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Required() {
  return <span className="text-red-500 ml-0.5">*</span>;
}

// ── フッター ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
      <p className="text-white font-bold text-base mb-1">🔥 ゆめが丘BBQ</p>
      <p>神奈川県横浜市 / 相鉄いずみ野線 下飯田駅 徒歩10分</p>
      <p className="mt-4 text-xs text-gray-600">© 2025 ゆめが丘BBQ. All rights reserved.</p>
    </footer>
  );
}

// ── 共通セクション見出し ────────────────────────────────────
function SectionHeading({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <span
        className={`inline-block text-xs font-bold tracking-widest px-4 py-1 rounded-full mb-3 ${
          dark ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl sm:text-4xl font-extrabold ${dark ? "text-white" : "text-gray-800"}`}
      >
        {title}
      </h2>
    </div>
  );
}

// ── メインエクスポート ───────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Access />
      <Reservation />
      <Footer />
    </main>
  );
}
