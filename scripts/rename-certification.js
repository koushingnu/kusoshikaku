const fs = require('fs');
const path = require('path');

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length !== 5) {
  console.log('使い方: node scripts/rename-certification.js <古いID> <新しいID> <新しい名前> <新しい説明>');
  console.log('例: node scripts/rename-certification.js dam-meister sake-master 日本酒マイスター "日本酒の知識を極める"');
  process.exit(1);
}

const [oldId, newId, newName, newDescription] = args;

const appDir = path.join(__dirname, '..', 'app');
const dataFile = path.join(__dirname, '..', 'data', 'certifications.json');

// 1. フォルダ名を変更
const oldFolderPath = path.join(appDir, oldId);
const newFolderPath = path.join(appDir, newId);

if (!fs.existsSync(oldFolderPath)) {
  console.error(`エラー: フォルダ ${oldId} が見つかりません`);
  process.exit(1);
}

if (fs.existsSync(newFolderPath)) {
  console.error(`エラー: フォルダ ${newId} は既に存在します`);
  process.exit(1);
}

fs.renameSync(oldFolderPath, newFolderPath);
console.log(`✓ フォルダ名を変更: ${oldId} → ${newId}`);

// 2. JSONファイルを更新
const certifications = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const index = certifications.findIndex(cert => cert.id === oldId);

if (index === -1) {
  console.error(`エラー: ID ${oldId} がJSONファイルに見つかりません`);
  process.exit(1);
}

certifications[index] = {
  id: newId,
  name: newName,
  description: newDescription
};

fs.writeFileSync(dataFile, JSON.stringify(certifications, null, 2) + '\n', 'utf8');
console.log(`✓ JSONファイルを更新`);

console.log('\n完了！');
console.log(`  旧: /${oldId}`);
console.log(`  新: /${newId} - ${newName}`);
