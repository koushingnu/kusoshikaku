import CertificationLayout from "@/components/CertificationLayout";

export default function SantaMeisterPage() {
  return (
    <CertificationLayout certificationName="サンタマイスター">
      {/* ここから独自コンテンツ */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          サンタマイスターは、サンタクロースの魅力を伝える専門家です。
        </p>
        
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
          <h3 className="text-xl font-bold mb-3 text-red-700">🎅 主な活動</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>クリスマスイベントの企画・運営</li>
            <li>サンタクロースの歴史や文化の研究</li>
            <li>子どもたちへの夢の提供</li>
            <li>サンタ衣装のコーディネート</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-3 text-green-700">🎄 必要なスキル</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ホスピタリティ精神</li>
            <li>演技力とコミュニケーション能力</li>
            <li>クリスマス文化の深い知識</li>
          </ul>
        </div>

        <p className="text-gray-600 text-center mt-8 text-sm">
          ここに追加のコンテンツを自由に追加できます
        </p>
      </div>
    </CertificationLayout>
  );
}
