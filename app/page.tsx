'use client';

import { motion } from 'framer-motion';

const modes = [
  {
    title: 'サバイバル鯖',
    description: '素材集め・建築・農業をじっくり楽しめる王道ワールド。みんなで街を育てよう。'
  },
  {
    title: 'ミニゲーム鯖',
    description: '短時間でも盛り上がれる協力/対戦コンテンツを用意。友達と気軽に遊べます。'
  },
  {
    title: 'イベント鯖',
    description: '季節ごとの限定イベントや参加型企画で、いつ来ても新鮮な体験を楽しめます。'
  },
  {
    title: 'Mod鯖',
    description: '魔法や冒険要素を追加したファンタジー重視の世界。導入方法はDiscordでサポート。'
  }
];

const highlights = [
  '初心者歓迎',
  'カスタムプラグイン多数',
  '定期イベントあり',
  'Java版＋統合版対応'
];

const discordUrl = 'https://discord.gg/atuserver';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  })
};

export default function Home() {
  return (
    <main>
      <header className="relative overflow-hidden bg-hero bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <div className="relative mx-auto flex min-h-[92vh] w-[92vw] max-w-6xl flex-col">
          <nav className="flex flex-wrap items-center justify-between gap-4 py-5">
            <p className="font-heading text-xl tracking-[0.08em]">Atu Server</p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <a href="#about" className="rounded-full border border-white/40 bg-white/10 px-3 py-1.5 hover:bg-white/20">
                サーバー紹介
              </a>
              <a href="#join" className="rounded-full border border-white/40 bg-white/10 px-3 py-1.5 hover:bg-white/20">
                参加方法
              </a>
              <a
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-1.5 font-bold text-leaf-900 shadow-lg shadow-emerald-900/25 hover:brightness-110"
              >
                参加する
              </a>
            </div>
          </nav>

          <section className="my-auto max-w-3xl pb-16 pt-8">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="mb-3 inline-flex rounded-full border border-emerald-100/40 bg-emerald-50/10 px-3 py-1 text-sm font-bold"
            >
              Java版 + 統合版 対応
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-4xl font-black leading-tight md:text-6xl"
            >
              明るい大自然で、
              <br />
              最高のサバイバルを。
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="mt-4 text-lg font-semibold text-emerald-50 md:text-xl"
            >
              おしゃれでまったり、それでいて冒険心をくすぐる。
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
              className="mt-3 max-w-2xl text-emerald-100"
            >
              Atu Serverは、初心者からベテランまで楽しめるMinecraftコミュニティ。
              サバイバル・ミニゲーム・イベントを自由に行き来して、自分だけの物語を育てよう。
              参加案内はDiscordでわかりやすくサポートしています。
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-3 font-extrabold text-leaf-900 shadow-glow hover:brightness-110"
              >
                今すぐ遊ぶ
              </a>
              <a
                href="#about"
                className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-bold backdrop-blur-sm hover:bg-white/20"
              >
                詳細を見る
              </a>
            </motion.div>
          </section>
        </div>
      </header>

      <section id="about" className="mx-auto w-[92vw] max-w-6xl py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-700">Overview</p>
          <h2 className="mt-2 text-3xl font-black text-leaf-900 md:text-4xl">Atu Serverの魅力</h2>
          <p className="mt-3 max-w-3xl text-leaf-700">
            明るく温かいコミュニティのなかで、のんびり建築も、真剣な冒険も楽しめるサーバーです。
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-leaf-200 bg-white p-5 shadow-lg shadow-leaf-900/5"
            >
              <h3 className="text-lg font-extrabold text-leaf-800">{item}</h3>
              <p className="mt-2 text-sm text-leaf-700">
                {item === '初心者歓迎' && '初めての人向けガイドを用意。コミュニティが優しくサポートします。'}
                {item === 'カスタムプラグイン多数' && '遊びやすさを高める独自機能で、日々の冒険がもっと快適に。'}
                {item === '定期イベントあり' && '建築企画やバトル系イベントなど、みんなで熱くなれる企画を開催。'}
                {item === 'Java版＋統合版対応' && 'PCもスマホも歓迎。みんなが同じ世界で遊べるよう運営しています。'}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-leaf-200 bg-leaf-100/60 py-16">
        <div className="mx-auto w-[92vw] max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-700">Game Modes</p>
            <h2 className="mt-2 text-3xl font-black text-leaf-900 md:text-4xl">それぞれのサーバー紹介</h2>
            <p className="mt-3 max-w-3xl text-leaf-700">気分に合わせて遊び分けられる4つの世界を用意しています。</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {modes.map((mode, index) => (
              <motion.article
                key={mode.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-2xl border p-6 shadow-lg ${
                  mode.title === 'Mod鯖'
                    ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 via-lime-50 to-white'
                    : 'border-leaf-200 bg-white'
                }`}
              >
                <h3 className="text-2xl font-black text-leaf-800">{mode.title}</h3>
                <p className="mt-2 text-leaf-700">{mode.description}</p>
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex font-bold text-leaf-700 underline decoration-2 underline-offset-4 hover:text-leaf-900"
                >
                  詳細を見る
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto w-[92vw] max-w-6xl py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-700">How to Join</p>
          <h2 className="mt-2 text-3xl font-black text-leaf-900 md:text-4xl">参加方法（初心者向け）</h2>
          <p className="mt-3 text-leaf-700">
            サーバーIDは公開していません。Discord参加後、案内チャンネルの手順で安全に接続してください。
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-leaf-200 bg-white p-6 shadow-lg shadow-leaf-900/5">
            <h3 className="text-xl font-black text-leaf-800">Java版</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-leaf-700">
              <li>Discordに参加する</li>
              <li>「参加案内」チャンネルを確認する</li>
              <li>案内された接続情報を入力してログイン</li>
              <li>初回ガイドを読んでサバイバル開始</li>
            </ol>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl bg-leaf-700 px-4 py-2.5 font-bold text-white hover:bg-leaf-800"
            >
              Java版で参加する
            </a>
          </article>

          <article className="rounded-2xl border border-leaf-200 bg-white p-6 shadow-lg shadow-leaf-900/5">
            <h3 className="text-xl font-black text-leaf-800">統合版（Bedrock）</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-leaf-700">
              <li>Discordの「統合版ガイド」を開く</li>
              <li>必要な設定手順をそのまま進める</li>
              <li>接続できない場合はサポートに質問</li>
              <li>案内完了後、ワールドで合流</li>
            </ol>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl bg-leaf-700 px-4 py-2.5 font-bold text-white hover:bg-leaf-800"
            >
              統合版で参加する
            </a>
          </article>
        </div>
      </section>

      <footer className="border-t border-leaf-200 bg-white py-8">
        <div className="mx-auto flex w-[92vw] max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-leaf-700">© 2026 Atu Server</p>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-leaf-100 px-4 py-2 text-sm font-bold text-leaf-800 hover:bg-leaf-200"
          >
            Discordで最新情報を見る
          </a>
        </div>
      </footer>
    </main>
  );
}
