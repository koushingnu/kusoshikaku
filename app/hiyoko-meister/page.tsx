import CertificationLayout from "@/components/CertificationLayout";

export default function HiyokoMeisterPage() {
  return (
    <CertificationLayout certificationName="ひよこ鑑定士">
      {/* ここから独自コンテンツ */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          ひよこ鑑定士は、生まれたばかりのひよこの性別を見分ける専門家です。
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">主な業務</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ひよこの性別鑑定</li>
            <li>養鶏場での品質管理</li>
            <li>鑑定技術の指導</li>
          </ul>
        </div>

        <p className="text-gray-600 text-center mt-8">
          ここに独自のコンテンツを追加できます
        </p>
      </div>
    </CertificationLayout>
  );
}
