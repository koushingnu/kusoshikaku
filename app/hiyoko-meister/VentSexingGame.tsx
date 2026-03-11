"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function VentSexingGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentChick, setCurrentChick] = useState<{ id: number; gender: 'male' | 'female' } | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [bestScore, setBestScore] = useState(0);
  const [totalChicks, setTotalChicks] = useState(0);
  const [showVent, setShowVent] = useState(false);
  const [examining, setExamining] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('hiyoko-vent-best-score');
    if (saved) setBestScore(parseInt(saved));
  }, []);

  const generateChick = () => {
    setCurrentChick({
      id: Math.random(),
      gender: Math.random() > 0.5 ? 'male' : 'female'
    });
    setFeedback(null);
    setShowVent(false);
    setExamining(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setMistakes(0);
    setCombo(0);
    setMaxCombo(0);
    setTotalChicks(0);
    setTimeLeft(30);
    setGameOver(false);
    generateChick();
  };

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem('hiyoko-vent-best-score', score.toString());
      }
    }
  }, [gameStarted, timeLeft, gameOver, score, bestScore]);

  // ひよこを持つ（検査開始）
  const handleHoldChick = () => {
    if (examining || !currentChick) return;
    setExamining(true);
    
    // 1秒後に肛門を表示
    setTimeout(() => {
      setShowVent(true);
    }, 1000);
  };

  const handleAnswer = (answer: 'male' | 'female') => {
    if (!currentChick || gameOver || !showVent) return;
    
    setTotalChicks(totalChicks + 1);
    
    if (answer === currentChick.gender) {
      setScore(score + 1);
      setCombo(combo + 1);
      if (combo + 1 > maxCombo) {
        setMaxCombo(combo + 1);
      }
      setFeedback('correct');
    } else {
      setMistakes(mistakes + 1);
      setCombo(0);
      setFeedback('wrong');
    }
    
    setTimeout(() => {
      generateChick();
    }, 800);
  };

  const accuracy = totalChicks > 0 ? Math.round((score / totalChicks) * 100) : 0;

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-400 rounded-xl p-6 sm:p-8">
      <h3 className="text-2xl sm:text-3xl font-black mb-2 text-center text-yellow-800">
        🔬 肛門鑑別ゲーム 🔬
      </h3>
      <p className="text-center text-gray-700 mb-4 text-sm">
        実際の鑑別方法を体験！お尻の突起を見分けよう
      </p>

      {bestScore > 0 && !gameStarted && (
        <div className="text-center mb-4 bg-yellow-200 rounded-lg p-3">
          <span className="text-sm font-bold text-yellow-800">
            🏆 ベストスコア: {bestScore}羽
          </span>
        </div>
      )}

      {!gameStarted ? (
        <div className="space-y-6">
          {/* 説明 */}
          <div className="bg-white rounded-lg p-4 text-sm text-gray-700 space-y-2">
            <h4 className="font-bold text-center text-lg mb-2">🎮 遊び方</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>ひよこをクリックして持つ</li>
              <li>お腹を押してフンを出す（自動）</li>
              <li>お尻の内部を観察</li>
              <li><span className="font-bold text-red-600">突起あり = オス</span></li>
              <li><span className="font-bold text-pink-600">突起なし（平ら）= メス</span></li>
            </ol>
            <p className="text-xs text-gray-500 mt-2">
              ※実際の突起は0.5mm程度で非常に小さいため、プロの訓練が必要です
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={startGame}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-black text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              ゲームスタート！
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* スコアボード */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white rounded-lg p-3 shadow">
            <div className="text-center">
              <div className="text-xs text-gray-600">正解</div>
              <div className="text-2xl font-black text-green-600">{score}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-600">ミス</div>
              <div className="text-2xl font-black text-red-600">{mistakes}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-600">コンボ</div>
              <div className="text-2xl font-black text-purple-600">{combo}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-600">残り時間</div>
              <div className={`text-2xl font-black ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}>
                {timeLeft}秒
              </div>
            </div>
          </div>

          {combo >= 5 && !gameOver && (
            <div className="text-center animate-bounce">
              <span className="text-xl sm:text-2xl font-black text-orange-600">
                🔥 {combo}連続正解！ 🔥
              </span>
            </div>
          )}

          {!gameOver ? (
            <div className="space-y-4">
              {/* ゲームエリア */}
              <div className="bg-white rounded-lg p-6 min-h-[400px] flex flex-col items-center justify-center relative">
                {!examining ? (
                  <>
                    {/* ひよこを持つ前 */}
                    <div className="text-center space-y-4">
                      <div className="relative w-64 h-64 mx-auto cursor-pointer" onClick={handleHoldChick}>
                        <Image
                          src="/hiyoko/game/hiyoko.png"
                          alt="ひよこ"
                          fill
                          className="object-contain animate-bounce"
                        />
                      </div>
                      <p className="text-lg font-bold text-gray-700">
                        ひよこをクリックして持ち上げる
                      </p>
                      <p className="text-sm text-gray-500">
                        ↑ クリック！
                      </p>
                    </div>
                  </>
                ) : !showVent ? (
                  <>
                    {/* 検査中（準備中） */}
                    <div className="text-center space-y-4">
                      <div className="relative w-64 h-64 mx-auto">
                        <Image
                          src="/hiyoko/game/hiyoko.png"
                          alt="ひよこ"
                          fill
                          className="object-contain animate-pulse"
                        />
                      </div>
                      <p className="text-lg font-bold text-gray-700">
                        お腹を押してフンを出しています...
                      </p>
                      <div className="flex gap-1 justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* 肛門を表示 */}
                    <div className="text-center space-y-4">
                      <p className="text-lg font-bold text-gray-700 mb-2">
                        お尻の内部を観察してください
                      </p>
                      
                      {/* 肛門の画像 */}
                      <div className="relative w-64 h-64 mx-auto bg-gray-100 rounded-lg border-4 border-gray-300 overflow-hidden">
                        {currentChick && (
                          <Image
                            src={currentChick.gender === 'male' ? '/hiyoko/game/male-vent.png' : '/hiyoko/game/female-vent.png'}
                            alt="ひよこの肛門"
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>

                      <p className="text-sm text-gray-600">
                        {currentChick?.gender === 'male' ? '小さな突起が見える？' : '平らで突起がない？'}
                      </p>

                      {/* フィードバック */}
                      {feedback && (
                        <div className={`text-4xl font-black ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                          {feedback === 'correct' ? '✅ 正解！' : '❌ 不正解...'}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* 判定ボタン（肛門表示後のみ） */}
              {showVent && !feedback && (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleAnswer('male')}
                    className="py-6 bg-blue-500 hover:bg-blue-600 text-white font-black text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
                  >
                    オス ♂<br />
                    <span className="text-sm font-normal">突起あり</span>
                  </button>
                  <button
                    onClick={() => handleAnswer('female')}
                    className="py-6 bg-pink-500 hover:bg-pink-600 text-white font-black text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
                  >
                    メス ♀<br />
                    <span className="text-sm font-normal">突起なし</span>
                  </button>
                </div>
              )}

              {/* 正解率 */}
              <div className="text-center text-sm text-gray-700 bg-white rounded-lg p-2">
                正解率: <span className="font-bold text-lg">{accuracy}%</span>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 bg-white rounded-lg p-6">
              <div className="text-4xl font-black text-yellow-800">ゲーム終了！</div>
              
              <div className="space-y-2">
                <div className="text-6xl font-black text-yellow-600">{score}羽</div>
                <div className="text-sm text-gray-600">
                  正解率: <span className="font-bold text-lg">{accuracy}%</span>
                </div>
                <div className="text-sm text-gray-600">
                  最大コンボ: <span className="font-bold text-lg text-purple-600">{maxCombo}連続</span>
                </div>
                {score > bestScore && (
                  <div className="text-xl font-bold text-red-600 animate-bounce">
                    🎉 新記録達成！ 🎉
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg p-4">
                <p className="text-2xl font-black">
                  {score >= 25 ? '🏆 神級！プロ鑑定士！' : 
                   score >= 20 ? '💎 プロ級！素晴らしい！' : 
                   score >= 15 ? '👍 上級者！もう少し！' : 
                   score >= 10 ? '😊 中級者！頑張った！' : 
                   '💪 初心者！もう一度挑戦！'}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {score >= 20 && '実際のプロは1羽2～4秒で判別します！'}
                </p>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-black text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                もう一度挑戦！
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
