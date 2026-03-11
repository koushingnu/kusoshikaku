"use client";

import CertificationLayout from "@/components/CertificationLayout";
import VentSexingGame from "./VentSexingGame";

export default function HiyokoMeisterPage() {
  return (
    <CertificationLayout certificationName="ひよこ鑑定士">
      <div className="space-y-8">
        {/* 概要セクション */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
          <h3 className="text-2xl font-black mb-4 text-yellow-800">🐣 資格概要</h3>
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              <span className="font-bold">正式名称：</span>初生雛鑑別師
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">認定団体：</span>公益社団法人 畜産技術協会
            </p>
            <p className="leading-relaxed">
              ひよこ鑑定士は、孵化したばかりのニワトリのヒナのオス・メスを瞬時に見分ける専門職です。
              主に孵化場でひよこの性別を鑑別し、養鶏業での飼育計画を支える重要な仕事です。
              <span className="font-bold text-yellow-700">熟練者は1羽あたり2～4秒ほどで判別できる</span>といわれています。
            </p>
          </div>
        </div>

        {/* 鑑別方法の説明 */}
        <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-6">
          <h3 className="text-2xl font-black mb-4 text-pink-800">🔬 肛門鑑別（Vent Sexing）</h3>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              ひよこの<span className="font-bold">お尻（総排出腔）</span>を開いて内部の形を見る方法です。
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">原理</h4>
              <ul className="space-y-1 text-sm">
                <li>• <span className="font-bold text-blue-600">オス：</span>生殖突起（小さなポッチ）がある</li>
                <li>• <span className="font-bold text-pink-600">メス：</span>突起がない（平ら）</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">手順</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>ひよこを片手で持つ</li>
                <li>お腹を軽く押してフンを出させる</li>
                <li>お尻を軽く広げる</li>
                <li>内部の突起の有無を見る</li>
              </ol>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-700 mb-2">⚠️ 実際はかなり難しい</h4>
              <ul className="space-y-1 text-sm">
                <li>• 突起が<span className="font-bold">0.5mm程度</span>と極小</li>
                <li>• 個体差がある</li>
                <li>• 押し方を間違えると見えない</li>
              </ul>
              <p className="text-xs mt-2 text-red-600">
                そのため専門の訓練が必要です
              </p>
            </div>
          </div>
        </div>

        {/* 詳細情報 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-800 mb-3 text-lg">📚 取得方法</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>畜産技術協会の「初生雛鑑別師養成所」に入所</li>
              <li>約5か月の養成講習を受講</li>
              <li>孵化場などで1～3年の実地研修</li>
              <li>予備考査 → 高等鑑別師考査に合格</li>
            </ol>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
            <h4 className="font-bold text-purple-800 mb-3 text-lg">💰 費用・合格率</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-bold">費用：</span>
                養成期間を含め<span className="text-purple-700 font-bold">100万円以上</span>かかる場合がある
              </p>
              <p>
                <span className="font-bold">合格率：</span>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>予備考査：約39%</li>
                <li>高等鑑別師考査：約60%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5">
          <h4 className="font-bold text-orange-800 mb-2 text-lg">🏷️ カテゴリー</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-bold">動物</span>
            <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-bold">農業</span>
            <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-bold">専門技能</span>
          </div>
          <div className="mt-3">
            <span className="font-bold text-orange-800">難易度：</span>
            <span className="text-2xl">⭐️⭐️⭐️</span>
          </div>
        </div>

        {/* 肛門鑑別ゲーム */}
        <VentSexingGame />
      </div>
    </CertificationLayout>
  );
}
