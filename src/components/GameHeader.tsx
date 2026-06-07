import { useGameStore } from '@/store/gameStore';
import { Star, Footprints, Target, Lightbulb } from 'lucide-react';

export default function GameHeader() {
  const score = useGameStore((s) => s.score);
  const movesLeft = useGameStore((s) => s.movesLeft);
  const targetScore = useGameStore((s) => s.targetScore);
  const level = useGameStore((s) => s.level);
  const hintsLeft = useGameStore((s) => s.hintsLeft);
  const isAnimating = useGameStore((s) => s.isAnimating);
  const gameStatus = useGameStore((s) => s.gameStatus);
  const useHint = useGameStore((s) => s.useHint);

  const handleHint = () => {
    if (hintsLeft > 0 && !isAnimating && gameStatus === 'playing') {
      useHint();
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-md mb-4">
      <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
        <span className="text-xs text-white/60 flex items-center gap-1">
          <Star size={12} /> 分数
        </span>
        <span className="text-xl font-bold text-white">{Math.floor(score)}</span>
      </div>

      <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
        <span className="text-xs text-white/60 flex items-center gap-1">
          <Target size={12} /> 目标
        </span>
        <span className="text-xl font-bold text-match-yellow">{targetScore}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleHint}
          disabled={hintsLeft <= 0 || isAnimating || gameStatus !== 'playing'}
          className="flex flex-col items-center bg-white/10 rounded-xl px-3 py-2 border border-white/10 disabled:opacity-40 hover:bg-white/20 transition-all"
        >
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Lightbulb size={12} /> 提示
          </span>
          <span className="text-xl font-bold text-match-cyan">{hintsLeft}</span>
        </button>

        <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Footprints size={12} /> 步数
          </span>
          <span className="text-xl font-bold text-match-green">{movesLeft}</span>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
        <span className="text-xs text-white/60">关卡</span>
        <span className="text-xl font-bold text-match-purple">{level}</span>
      </div>
    </div>
  );
}
