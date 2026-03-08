export default function SakeMasterPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← トップに戻る
        </a>
        
        <h1 className="text-5xl font-black mb-4">日本酒マイスター</h1>
        <p className="text-xl text-gray-600 mb-8">
          日本酒の知識を極める
        </p>

        <div className="border-2 border-black p-8">
          <p className="text-lg">
            ここに日本酒マイスターのコンテンツを追加していきます。
          </p>
        </div>
      </div>
    </main>
  );
}
