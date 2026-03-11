# コンテンツ作成ガイド

## 共通レイアウトの使い方

各資格ページは `CertificationLayout` コンポーネントを使用します。

### 基本構造

```tsx
import CertificationLayout from "@/components/CertificationLayout";

export default function YourCertificationPage() {
  return (
    <CertificationLayout certificationName="資格名">
      {/* ここに独自コンテンツを追加 */}
      <div>
        <h3>あなたのコンテンツ</h3>
        <p>自由に内容を追加できます</p>
      </div>
    </CertificationLayout>
  );
}
```

## 共通部分（自動で表示される）

- ✅ トップのタイトル「クソ資格検定」
- ✅ サブタイトル「誰も知らない資格勉強アプリ」
- ✅ 資格名（黄色で大きく表示）
- ✅ 白い背景のコンテンツエリア
- ✅ 「トップに戻る」ボタン
- ✅ レスポンシブ対応

## 独自コンテンツ部分（自由に作成）

`<CertificationLayout>` の中身（`children`）は完全に自由です。

### 例1: クイズ形式（ラーメン検定）

```tsx
<CertificationLayout certificationName="ラーメンソムリエ">
  <div className="space-y-8">
    <h3 className="text-3xl font-black text-center">
      Q1 横浜家系ラーメンを当てろ！
    </h3>
    
    <div className="grid grid-cols-2 gap-6">
      <button className="aspect-square border-4 border-gray-300">
        画像1
      </button>
      <button className="aspect-square border-4 border-gray-300">
        画像2
      </button>
    </div>
  </div>
</CertificationLayout>
```

### 例2: 説明形式（ひよこ鑑定士）

```tsx
<CertificationLayout certificationName="ひよこ鑑定士">
  <div className="space-y-6">
    <p className="text-lg">
      ひよこ鑑定士の説明文...
    </p>
    
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold">主な業務</h3>
      <ul className="list-disc list-inside">
        <li>項目1</li>
        <li>項目2</li>
      </ul>
    </div>
  </div>
</CertificationLayout>
```

### 例3: 動画埋め込み

```tsx
<CertificationLayout certificationName="資格名">
  <div className="space-y-6">
    <div className="aspect-video">
      <iframe 
        src="YouTube URL" 
        className="w-full h-full"
      />
    </div>
    
    <p>動画の説明...</p>
  </div>
</CertificationLayout>
```

## よく使うスタイル

### 間隔
- `space-y-4`: 小さめの間隔
- `space-y-6`: 中くらいの間隔
- `space-y-8`: 大きめの間隔

### テキスト
- `text-lg`: 大きめのテキスト
- `text-xl`: さらに大きいテキスト
- `font-bold`: 太字
- `font-black`: 超太字

### 背景
- `bg-gray-100`: 薄いグレー背景
- `bg-blue-50`: 薄い青背景
- `rounded-lg`: 角丸

### ボタン
```tsx
<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  ボタン
</button>
```

## 画像の使い方

```tsx
import Image from "next/image";

<Image
  src="/contents/your-image.png"
  alt="説明"
  width={500}
  height={300}
  className="rounded-lg"
/>
```

## 新しい資格ページの作成手順

1. スクリプトで資格を追加
```bash
npm run cert:add your-cert-id 資格名 "説明"
```

2. `app/your-cert-id/page.tsx` を編集
```tsx
import CertificationLayout from "@/components/CertificationLayout";

export default function YourCertPage() {
  return (
    <CertificationLayout certificationName="資格名">
      {/* 独自コンテンツ */}
    </CertificationLayout>
  );
}
```

3. 画像を追加（必要に応じて）
- `public/contents/your-image.png` に配置
- JSONファイルに画像パスを追加

これで完成！各資格ページで自由にコンテンツを作成できます。
