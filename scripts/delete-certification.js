const fs = require('fs');
const path = require('path');

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log('使い方: node scripts/delete-certification.js <ID>');
  console.log('例: node scripts/delete-certification.js dam-meister');
  process.exit(1);
}

const [id] = args;

const appDir = path.join(__dirname, '..', 'app');
const dataFile = path.join(__dirname, '..', 'data', 'certifications.json');

// 1. フォルダを削除
const folderPath = path.join(appDir, id);

if (!fs.existsSync(folderPath)) {
  console.error(`エラー: フォルダ ${id} が見つかりません`);
  process.exit(1);
}

fs.rmSync(folderPath, { recursive: true, force: true });
console.log(`✓ フォルダを削除: app/${id}`);

// 2. JSONファイルから削除
const certifications = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const filtered = certifications.filter(cert => cert.id !== id);

if (filtered.length === certifications.length) {
  console.error(`警告: ID ${id} がJSONファイルに見つかりませんでした`);
}

fs.writeFileSync(dataFile, JSON.stringify(filtered, null, 2) + '\n', 'utf8');
console.log(`✓ JSONファイルから削除`);

console.log('\n完了！');
console.log(`  削除した資格: ${id}`);
