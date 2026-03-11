"use client";

import certifications from "@/data/certifications.json";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showPiyo, setShowPiyo] = useState(false);

  const handleChickClick = () => {
    setShowPiyo(true);
    setTimeout(() => setShowPiyo(false), 4000);
  };

  return (
    <main className="min-h-screen bg-[#1e1e8f] relative overflow-hidden">
      {/* ピヨピヨアニメーション */}
      {showPiyo && (
        <div className="fixed top-1/2 left-0 w-screen z-50 pointer-events-none overflow-visible">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-yellow-400 whitespace-nowrap animate-scroll absolute">
            ピヨピヨピヨ......
          </div>
        </div>
      )}

      {/* ひよこキャラ（左下） */}
      <div 
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-10 animate-bounce cursor-pointer hover:scale-110 transition-transform" 
        style={{ animationDuration: '3s' }}
        onClick={handleChickClick}
      >
        🐣
      </div>

      {/* 吹き出しとひよこ（画面右上端） */}
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 z-20">
        <div className="relative inline-block pb-8 pr-8 sm:pb-10 sm:pr-10 md:pb-12 md:pr-12">
          <div className="bg-white text-blue-900 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white text-[10px] sm:text-xs font-bold shadow-lg max-w-[120px] sm:max-w-[140px] md:max-w-[160px] relative">
            将来の選択肢の一つに<br />なれば嬉しいピヨ...
            {/* 吹き出しの尻尾（右下に向かう） */}
            <div className="absolute bottom-1 sm:bottom-2 right-0 w-0 h-0 border-l-[12px] sm:border-l-[15px] md:border-l-[18px] border-l-white border-t-[12px] sm:border-t-[15px] md:border-t-[18px] border-t-transparent translate-x-1/2 translate-y-1/2"></div>
          </div>
          {/* ひよこ（吹き出しの右下） */}
          <div className="absolute bottom-0 right-0 text-3xl sm:text-4xl md:text-5xl">
            🐣
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 relative">
        {/* ヘッダーエリア */}
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

        {/* 頂目 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-6 sm:mb-8">
          頂目
        </h2>

        {/* カードエリア */}
        <div className="bg-texture p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <a
                key={cert.id}
                href={`/${cert.id}`}
                className="hover:scale-105 transition-transform block"
              >
                {/* 画像ボックス（正方形） */}
                <div className="aspect-square bg-gray-200 border-2 sm:border-3 md:border-4 border-gray-300 rounded-md sm:rounded-lg overflow-hidden mb-2 sm:mb-3 relative">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-4xl sm:text-5xl md:text-6xl">🖼️</span>
                    </div>
                  )}
                </div>
                
                {/* タイトル（カード下） */}
                <h3 className="font-black text-base sm:text-xl md:text-2xl lg:text-3xl text-center leading-tight">
                  {cert.coloredPart ? (
                    <>
                      <span className={index % 2 === 0 ? "text-red-600" : "text-yellow-500"}>
                        {cert.coloredPart}
                      </span>
                      <span className="text-black">
                        {cert.name.replace(cert.coloredPart, '')}
                      </span>
                    </>
                  ) : (
                    <span className="text-black">{cert.name}</span>
                  )}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
