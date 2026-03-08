const fs = require('fs');
const path = require('path');

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log('使い方: node scripts/add-certification.js <ID> <名前> <説明>');
  console.log('例: node scripts/add-certification.js sake-master 日本酒マイスター "日本酒の知識を極める"');
  process.exit(1);
}

const [id, name, description] = args;

const appDir = path.join(__dirname, '..', 'app');
const dataFile = path.join(__dirname, '..', 'data', 'certifications.json');

// 1. フォルダを作成
const folderPath = path.join(appDir, id);

if (fs.existsSync(folderPath)) {
  console.error(`エラー: フォルダ ${id} は既に存在します`);
  process.exit(1);
}

fs.mkdirSync(folderPath, { recursive: true });
console.log(`✓ フォルダを作成: app/${id}`);

// 2. page.tsxを作成
const pageContent = `export default function ${toPascalCase(id)}Page() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← トップに戻る
        </a>
        
        <h1 className="text-5xl font-black mb-4">${name}</h1>
        <p className="text-xl text-gray-600 mb-8">
          ${description}
        </p>

        <div className="border-2 border-black p-8">
          <p className="text-lg">
            ここに${name}のコンテンツを追加していきます。
          </p>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(folderPath, 'page.tsx'), pageContent, 'utf8');
console.log(`✓ page.tsxを作成`);

// 3. JSONファイルに追加
const certifications = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

if (certifications.some(cert => cert.id === id)) {
  console.error(`エラー: ID ${id} は既にJSONファイルに存在します`);
  process.exit(1);
}

certifications.push({
  id,
  name,
  description
});

fs.writeFileSync(dataFile, JSON.stringify(certifications, null, 2) + '\n', 'utf8');
console.log(`✓ JSONファイルに追加`);

console.log('\n完了！');
console.log(`  URL: /${id}`);
console.log(`  名前: ${name}`);

// ヘルパー関数: kebab-case を PascalCase に変換
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
