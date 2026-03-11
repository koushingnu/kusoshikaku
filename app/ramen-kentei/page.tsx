import CertificationLayout from "@/components/CertificationLayout";
import Image from "next/image";

export default function RamenKenteiPage() {
  return (
    <CertificationLayout certificationName="ラーメンソムリエ">
      {/* ここから独自コンテンツ */}
      <div className="space-y-8">
        {/* クイズ */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-black mb-6 text-center">
            Q1 横浜家系ラーメンを当てろ！
          </h3>
          
          {/* 画像選択肢 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            <button className="relative aspect-square rounded-lg overflow-hidden border-4 border-gray-300 hover:border-blue-500 transition-colors">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🍜</span>
              </div>
            </button>
            <button className="relative aspect-square rounded-lg overflow-hidden border-4 border-gray-300 hover:border-blue-500 transition-colors">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🍜</span>
              </div>
            </button>
          </div>

          {/* 椅子のイラスト */}
          <div className="flex justify-center gap-8 sm:gap-12">
            <div className="text-6xl sm:text-7xl">🪑</div>
            <div className="text-6xl sm:text-7xl">🪑</div>
          </div>
        </div>

        {/* 追加コンテンツエリア */}
        <div className="border-t-2 border-gray-200 pt-8">
          <p className="text-gray-600 text-center">
            ここに追加のコンテンツを自由に追加できます
          </p>
        </div>
      </div>
    </CertificationLayout>
  );
}
