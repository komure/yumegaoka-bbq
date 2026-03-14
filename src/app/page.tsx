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
        <span className="font-bold text-green-700 text-lg">🔥 ベリーBBQ</span>
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
          ベリーBBQは、横浜の自然の中で<br className="hidden sm:block" />
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
        <SectionHeading label="おすすめポイント" title="ベリーBBQが選ばれる理由" />
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
            <p className="font-bold text-green-800 text-lg">ベリーBBQ</p>
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
      <p className="text-white font-bold text-base mb-1">🔥 ベリーBBQ</p>
      <p>神奈川県横浜市 / 相鉄いずみ野線 下飯田駅 徒歩10分</p>
      <p className="mt-4 text-xs text-gray-600">© 2025 ベリーBBQ. All rights reserved.</p>
    </footer>
  );
}

// ── こんな使い方 ────────────────────────────────────────────
function FamilySVG() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* 夜空 */}
      <rect width="400" height="240" fill="#0F172A" />
      <rect width="400" height="195" fill="#1E293B" />
      {/* 星 */}
      {([
        [40, 22], [85, 42], [150, 14], [220, 30], [310, 18],
        [360, 38], [130, 58], [280, 48], [60, 70], [340, 65],
      ] as [number, number][]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={0.7} />
      ))}
      {/* 月 */}
      <circle cx="355" cy="38" r="20" fill="#FDE68A" />
      <circle cx="365" cy="30" r="16" fill="#1E293B" />
      {/* 木（左） */}
      <rect x="28" y="162" width="10" height="40" rx="3" fill="#78350F" />
      <polygon points="18,168 33,110 48,168" fill="#14532D" />
      <polygon points="22,148 33,98 44,148" fill="#166534" />
      {/* 木（右） */}
      <rect x="362" y="162" width="10" height="40" rx="3" fill="#78350F" />
      <polygon points="352,168 367,110 382,168" fill="#14532D" />
      <polygon points="356,148 367,98 378,148" fill="#166534" />
      {/* 地面 */}
      <rect x="0" y="195" width="400" height="45" fill="#166534" />
      <ellipse cx="200" cy="195" rx="200" ry="7" fill="#15803D" />
      {/* 焚き火の光 */}
      <ellipse cx="200" cy="196" rx="55" ry="12" fill="#FED7AA" opacity="0.45" />
      {/* 薪 */}
      <rect x="176" y="191" width="48" height="8" rx="4" fill="#92400E" />
      <rect x="188" y="182" width="8" height="22" rx="4" fill="#78350F"
        transform="rotate(28 192 193)" />
      <rect x="204" y="182" width="8" height="22" rx="4" fill="#78350F"
        transform="rotate(-28 208 193)" />
      {/* 炎（外→内） */}
      <path d="M200 192 C190 175 186 158 196 144 C193 158 200 153 200 142 C200 153 207 158 204 144 C214 158 210 175 200 192Z" fill="#F97316" />
      <path d="M200 188 C193 173 191 160 197 150 C196 160 200 156 200 148 C200 156 204 160 203 150 C209 160 207 173 200 188Z" fill="#FCD34D" />
      <path d="M200 182 C196 171 195 161 199 154 C198 162 200 158 200 153 C200 158 202 162 201 154 C205 161 204 171 200 182Z" fill="#FEF08A" />
      {/* パパ（左・青） */}
      <rect x="88" y="148" width="30" height="42" rx="7" fill="#3B82F6" />
      <rect x="90" y="185" width="11" height="28" rx="5" fill="#1D4ED8" />
      <rect x="105" y="185" width="11" height="28" rx="5" fill="#1D4ED8" />
      <circle cx="103" cy="133" r="17" fill="#FBBF24" />
      <path d="M86 129 Q103 117 120 129 Q116 120 103 118 Q90 120 86 129Z" fill="#78350F" />
      <circle cx="97" cy="132" r="2.5" fill="#1C1917" />
      <circle cx="109" cy="132" r="2.5" fill="#1C1917" />
      <path d="M97 141 Q103 146 109 141" stroke="#1C1917" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M118 158 Q148 163 165 173" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M88 158 Q74 168 67 180" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* こども（中央・黄） */}
      <rect x="186" y="168" width="26" height="30" rx="6" fill="#F59E0B" />
      <rect x="188" y="194" width="9" height="22" rx="4" fill="#D97706" />
      <rect x="201" y="194" width="9" height="22" rx="4" fill="#D97706" />
      <circle cx="199" cy="155" r="14" fill="#FDE68A" />
      <path d="M185 153 Q199 142 213 153 Q209 144 199 142 Q189 144 185 153Z" fill="#92400E" />
      <circle cx="194" cy="154" r="2" fill="#1C1917" />
      <circle cx="204" cy="154" r="2" fill="#1C1917" />
      <path d="M194 163 Q199 168 204 163" stroke="#1C1917" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M186 174 Q176 166 169 158" stroke="#FDE68A" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M212 174 Q222 166 229 158" stroke="#FDE68A" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* ママ（右・ピンク） */}
      <rect x="282" y="148" width="30" height="42" rx="7" fill="#EC4899" />
      <rect x="284" y="185" width="11" height="28" rx="5" fill="#9D174D" />
      <rect x="299" y="185" width="11" height="28" rx="5" fill="#9D174D" />
      <circle cx="297" cy="133" r="17" fill="#FBBF24" />
      <path d="M280 129 Q297 117 314 129 Q310 120 297 118 Q284 120 280 129Z" fill="#92400E" />
      <rect x="279" y="129" width="6" height="22" rx="3" fill="#92400E" />
      <rect x="315" y="129" width="6" height="22" rx="3" fill="#92400E" />
      <circle cx="291" cy="132" r="2.5" fill="#1C1917" />
      <circle cx="303" cy="132" r="2.5" fill="#1C1917" />
      <path d="M291 141 Q297 146 303 141" stroke="#1C1917" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M282 158 Q252 163 235 173" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M312 158 Q326 168 333 180" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function FriendsSVG() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* 夕暮れ空 */}
      <rect width="400" height="240" fill="#FFF7ED" />
      <rect width="400" height="195" fill="#FFEDD5" />
      <rect width="400" height="100" fill="#FED7AA" opacity="0.6" />
      {/* 夕日 */}
      <circle cx="340" cy="90" r="38" fill="#FCD34D" opacity="0.55" />
      {/* 雲 */}
      <ellipse cx="80" cy="48" rx="38" ry="13" fill="white" opacity="0.85" />
      <ellipse cx="100" cy="42" rx="24" ry="11" fill="white" opacity="0.85" />
      <ellipse cx="240" cy="32" rx="28" ry="10" fill="white" opacity="0.7" />
      {/* 地面 */}
      <rect x="0" y="195" width="400" height="45" fill="#86EFAC" />
      <ellipse cx="200" cy="195" rx="200" ry="7" fill="#4ADE80" />
      {/* BBQグリル */}
      {/* ボウル */}
      <path d="M168 168 Q200 192 232 168" fill="#4B5563" />
      <ellipse cx="200" cy="168" rx="32" ry="10" fill="#6B7280" />
      {/* 脚 */}
      <line x1="184" y1="178" x2="177" y2="210" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
      <line x1="216" y1="178" x2="223" y2="210" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="178" x2="200" y2="213" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      {/* 横棒 */}
      <line x1="179" y1="198" x2="221" y2="198" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      {/* 網 */}
      <ellipse cx="200" cy="157" rx="32" ry="9" fill="#374151" />
      <ellipse cx="200" cy="157" rx="28" ry="7" fill="none" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="172" y1="157" x2="228" y2="157" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="184" y1="151" x2="184" y2="163" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="200" y1="150" x2="200" y2="164" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="216" y1="151" x2="216" y2="163" stroke="#6B7280" strokeWidth="1.5" />
      {/* 食材 */}
      <ellipse cx="189" cy="156" rx="8" ry="5" fill="#92400E" />
      <ellipse cx="211" cy="156" rx="8" ry="5" fill="#92400E" />
      {/* 煙 */}
      <path d="M189 150 Q186 143 189 136 Q192 130 189 123" stroke="#D1D5DB" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M200 148 Q197 141 200 134 Q203 128 200 121" stroke="#D1D5DB" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* 人物1（赤シャツ） */}
      <rect x="38" y="146" width="26" height="44" rx="7" fill="#EF4444" />
      <rect x="40" y="186" width="10" height="26" rx="5" fill="#B91C1C" />
      <rect x="54" y="186" width="10" height="26" rx="5" fill="#B91C1C" />
      <circle cx="51" cy="131" r="15" fill="#FBBF24" />
      <path d="M36 128 Q51 117 66 128 Q62 119 51 117 Q40 119 36 128Z" fill="#1C1917" />
      <circle cx="46" cy="130" r="2.2" fill="#1C1917" />
      <circle cx="56" cy="130" r="2.2" fill="#1C1917" />
      <path d="M46 139 Q51 144 56 139" stroke="#1C1917" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* 右腕（カップ上げ） */}
      <path d="M64 157 Q84 140 100 124" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="97" y="112" width="9" height="13" rx="2" fill="#F9A8D4" />
      {/* 左腕 */}
      <path d="M38 157 Q26 164 20 174" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* 人物2（緑シャツ） */}
      <rect x="108" y="146" width="26" height="44" rx="7" fill="#22C55E" />
      <rect x="110" y="186" width="10" height="26" rx="5" fill="#15803D" />
      <rect x="124" y="186" width="10" height="26" rx="5" fill="#15803D" />
      <circle cx="121" cy="131" r="15" fill="#FDE68A" />
      <path d="M106 128 Q121 117 136 128 Q132 119 121 117 Q110 119 106 128Z" fill="#92400E" />
      <circle cx="116" cy="130" r="2.2" fill="#1C1917" />
      <circle cx="126" cy="130" r="2.2" fill="#1C1917" />
      <path d="M116 139 Q121 144 126 139" stroke="#1C1917" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M134 157 Q150 139 163 122" stroke="#FDE68A" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="160" y="110" width="9" height="13" rx="2" fill="#7DD3FC" />
      <path d="M108 157 Q96 148 88 140" stroke="#FDE68A" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* 人物3（紫シャツ） */}
      <rect x="266" y="146" width="26" height="44" rx="7" fill="#A855F7" />
      <rect x="268" y="186" width="10" height="26" rx="5" fill="#7E22CE" />
      <rect x="282" y="186" width="10" height="26" rx="5" fill="#7E22CE" />
      <circle cx="279" cy="131" r="15" fill="#FBBF24" />
      <path d="M264 128 Q279 117 294 128 Q290 119 279 117 Q268 119 264 128Z" fill="#78350F" />
      <rect x="263" y="128" width="5" height="18" rx="2" fill="#78350F" />
      <rect x="291" y="128" width="5" height="18" rx="2" fill="#78350F" />
      <circle cx="274" cy="130" r="2.2" fill="#1C1917" />
      <circle cx="284" cy="130" r="2.2" fill="#1C1917" />
      <path d="M274 139 Q279 144 284 139" stroke="#1C1917" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M266 157 Q250 139 238 122" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="230" y="110" width="9" height="13" rx="2" fill="#FCD34D" />
      <path d="M292 157 Q304 148 312 138" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* 人物4（オレンジシャツ） */}
      <rect x="336" y="146" width="26" height="44" rx="7" fill="#F97316" />
      <rect x="338" y="186" width="10" height="26" rx="5" fill="#C2410C" />
      <rect x="352" y="186" width="10" height="26" rx="5" fill="#C2410C" />
      <circle cx="349" cy="131" r="15" fill="#FBBF24" />
      <path d="M334 128 Q349 117 364 128 Q360 119 349 117 Q338 119 334 128Z" fill="#1C1917" />
      <circle cx="344" cy="130" r="2.2" fill="#1C1917" />
      <circle cx="354" cy="130" r="2.2" fill="#1C1917" />
      <path d="M344 139 Q349 144 354 139" stroke="#1C1917" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M336 157 Q316 140 302 124" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="297" y="112" width="9" height="13" rx="2" fill="#86EFAC" />
      <path d="M362 157 Q374 164 380 174" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const scenes = [
  {
    number: "01",
    title: "家族で楽しむ",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    badge: "bg-amber-500",
    svg: <FamilySVG />,
    points: [
      "子どもも大人も一緒に楽しめる",
      "手ぶらOKだから準備ゼロ",
      "ソラトスで好きな食材を選ぶ買い物も思い出に",
    ],
  },
  {
    number: "02",
    title: "友達同士で楽しむ",
    color: "from-sky-50 to-green-50",
    border: "border-sky-200",
    badge: "bg-sky-500",
    svg: <FriendsSVG />,
    points: [
      "気の合う仲間と非日常を",
      "焚き火を囲んで語り合う夜",
      "昼でも夜でも盛り上がれる2部制",
    ],
  },
];

function UsageScenes() {
  return (
    <section id="scenes" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading label="こんな使い方" title="どんなシーンにも" />
        <div className="grid sm:grid-cols-2 gap-8">
          {scenes.map((scene) => (
            <div
              key={scene.number}
              className={`bg-gradient-to-br ${scene.color} border ${scene.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* イラスト */}
              <div className="p-4 pb-0">{scene.svg}</div>
              {/* テキスト */}
              <div className="p-6 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${scene.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {scene.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-gray-800">{scene.title}</h3>
                </div>
                <ul className="space-y-2">
                  {scene.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <UsageScenes />
      <Pricing />
      <Access />
      <Reservation />
      <Footer />
    </main>
  );
}
