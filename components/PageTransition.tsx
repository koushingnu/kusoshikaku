"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ページ遷移アニメーションが完了したらフラグをリセット
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <>
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* 背景の拡大円 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0 h-0 bg-yellow-400 rounded-full animate-expand-circle"></div>
          </div>
          
          {/* 回転する「クソ資格検定」文字 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl font-black text-[#1e1e8f] animate-spin-zoom">
              クソ資格検定
            </div>
          </div>

          {/* キラキラエフェクト */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// カスタムフック: ページ遷移トリガー
export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTo = (url: string) => {
    setIsTransitioning(true);
    
    // アニメーション中にページ遷移
    setTimeout(() => {
      router.push(url);
    }, 800);
  };

  return { transitionTo, isTransitioning };
}
