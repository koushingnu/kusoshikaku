# 資格管理ガイド

このプロジェクトでは、資格の追加・変更・削除を簡単に行えるスクリプトを用意しています。

## 📝 資格を追加する

```bash
npm run cert:add <ID> <名前> <説明>
```

### 例
```bash
npm run cert:add sake-master 日本酒マイスター "日本酒の知識を極める"
```

### 実行内容
1. `app/sake-master/` フォルダを作成
2. `app/sake-master/page.tsx` を自動生成
3. `data/certifications.json` に追加

---

## ✏️ 資格を変更する（リネーム）

```bash
npm run cert:rename <古いID> <新しいID> <新しい名前> <新しい説明>
```

### 例
```bash
npm run cert:rename dam-meister sake-master 日本酒マイスター "日本酒の知識を極める"
```

### 実行内容
1. `app/dam-meister/` → `app/sake-master/` にフォルダ名変更
2. `data/certifications.json` の該当エントリを更新

---

## 🗑️ 資格を削除する

```bash
npm run cert:delete <ID>
```

### 例
```bash
npm run cert:delete dam-meister
```

### 実行内容
1. `app/dam-meister/` フォルダを削除
2. `data/certifications.json` から削除

---

## 💡 Tips

### IDの命名規則
- 小文字とハイフンのみ使用（kebab-case）
- 例: `dam-meister`, `onsen-sommelier`, `cat-certification`

### 引数にスペースが含まれる場合
ダブルクォートで囲んでください：
```bash
npm run cert:add new-cert "新しい資格" "これは説明文です"
```

### 現在の資格一覧を確認
```bash
cat data/certifications.json
```

---

## 📂 手動で編集する場合

スクリプトを使わずに手動で管理することもできます：

1. **フォルダ作成**: `app/<資格ID>/`
2. **page.tsx作成**: `app/<資格ID>/page.tsx`
3. **JSON更新**: `data/certifications.json` に追加

ただし、スクリプトを使う方が確実で簡単です。
