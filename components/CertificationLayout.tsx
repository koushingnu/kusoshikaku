"use client";

import { ReactNode } from "react";

interface CertificationLayoutProps {
  certificationName: string;
  children: ReactNode;
}

export default function CertificationLayout({ 
  certificationName, 
  children 
}: CertificationLayoutProps) {
  return (
    <main className="min-h-screen bg-[#1e1e8f] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
        {/* ヘッダー */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* タイトル（アーチ状） */}
          <div className="mb-3 sm:mb-4">
            <div className="inline-block">
              <div className="flex justify-center items-end" style={{ transform: 'perspective(400px) rotateX(8deg)' }}>
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(-12deg) translateY(12px) sm:translateY(16px) md:translateY(20px)' }}>ク</span>
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(-6deg) translateY(5px) sm:translateY(6px) md:translateY(8px)' }}>ソ</span>
                <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(0deg) translateY(0px)' }}>資</span>
                <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(0deg) translateY(0px)' }}>格</span>
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(6deg) translateY(5px) sm:translateY(6px) md:translateY(8px)' }}>検</span>
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-yellow-400 drop-shadow-lg inline-block mx-0.5 sm:mx-1" style={{ transform: 'rotate(12deg) translateY(12px) sm:translateY(16px) md:translateY(20px)' }}>定</span>
              </div>
            </div>
          </div>
          
          <p className="text-white text-base sm:text-lg md:text-xl font-bold px-4">
            誰も知らない資格勉強アプリ
          </p>
        </div>

        {/* 資格名 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 text-center mb-6 sm:mb-8">
          {certificationName}
        </h2>

        {/* コンテンツエリア（白背景） */}
        <div className="bg-white rounded-none sm:rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
          {children}
        </div>

        {/* トップに戻るボタン */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-white text-[#1e1e8f] font-black text-lg rounded-lg hover:bg-gray-100 transition-colors"
          >
            ← トップに戻る
          </a>
        </div>
      </div>
    </main>
  );
}
