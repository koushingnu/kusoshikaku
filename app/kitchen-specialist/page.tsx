import CertificationLayout from "@/components/CertificationLayout";

export default function KitchenSpecialistPage() {
  return (
    <CertificationLayout certificationName="キッチンスペシャリスト">
      {/* ここから独自コンテンツ */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          キッチンスペシャリストは、キッチン空間の設計・提案を行う専門家です。
        </p>
        
        <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
          <h3 className="text-xl font-bold mb-3 text-orange-700">🏠 主な業務内容</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>キッチンの設計・プランニング</li>
            <li>設備機器の選定とアドバイス</li>
            <li>動線計画と収納提案</li>
            <li>リフォーム相談</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <h4 className="font-bold mb-2 text-blue-700">📐 必要な知識</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 建築・インテリアの基礎</li>
              <li>• 設備機器の知識</li>
              <li>• 法規制の理解</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <h4 className="font-bold mb-2 text-purple-700">💼 活躍の場</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 住宅メーカー</li>
              <li>• リフォーム会社</li>
              <li>• 設計事務所</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <p className="text-gray-700 font-bold mb-2">💡 Point</p>
          <p className="text-gray-600 text-sm">
            快適で機能的なキッチン空間を創造し、<br />
            お客様の理想の暮らしを実現するお手伝いをします
          </p>
        </div>

        <p className="text-gray-600 text-center mt-8 text-sm">
          ここに追加のコンテンツを自由に追加できます
        </p>
      </div>
    </CertificationLayout>
  );
}
