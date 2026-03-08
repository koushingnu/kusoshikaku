# クソ資格

誰も知らない資格を集めたWebアプリです。

## 🎯 コンセプト

シンプルで単調なデザインで、各資格を独立したアプリとして開発していきます。

## 🎨 デザインテイスト

- **白基調**: シンプルで見やすい
- **正方形カード**: 2列グリッドレイアウト
- **太い黒枠**: アホっぽくて親しみやすい

## 📱 構成

### トップページ (`/`)
- タイトル「クソ資格」
- 4つの資格カード（2×2グリッド）
- 各カードから各資格ページへリンク

### 各資格ページ
各資格ごとに独立したフォルダとページを持ちます：
- `/dam-meister` - ダムマイスター
- `/onsen-sommelier` - 温泉ソムリエ
- `/night-view-connoisseur` - 夜景鑑賞士
- `/cat-certification` - ねこ検定

## 🚀 セットアップ

### 必要な環境

- Node.js 18.x以上
- npm

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **UI**: React 19

## 📁 プロジェクト構造

```
.
├── app/
│   ├── layout.tsx                    # ルートレイアウト
│   ├── page.tsx                      # トップページ（資格一覧）
│   ├── globals.css                   # グローバルスタイル
│   ├── dam-meister/
│   │   └── page.tsx                  # ダムマイスターページ
│   ├── onsen-sommelier/
│   │   └── page.tsx                  # 温泉ソムリエページ
│   ├── night-view-connoisseur/
│   │   └── page.tsx                  # 夜景鑑賞士ページ
│   └── cat-certification/
│       └── page.tsx                  # ねこ検定ページ
├── data/
│   └── certifications.json           # 資格一覧データ
├── tailwind.config.ts                # Tailwind設定
├── tsconfig.json                     # TypeScript設定
└── package.json                      # 依存関係
```

## 📝 資格の追加方法

1. `data/certifications.json` に新しい資格を追加
```json
{
  "id": "new-certification",
  "name": "新しい資格",
  "description": "説明文"
}
```

2. `app/new-certification/page.tsx` を作成
3. 各資格ページで独自のコンテンツを開発

## 🎯 開発の流れ

各資格は独立したフォルダで管理されているため、それぞれ独自のアプリとして開発できます。
- クイズ機能
- 詳細情報
- 画像ギャラリー
- 動画埋め込み
など、資格ごとに自由にコンテンツを追加できます。

## 📄 ライセンス

このプロジェクトはプライベートプロジェクトです。
