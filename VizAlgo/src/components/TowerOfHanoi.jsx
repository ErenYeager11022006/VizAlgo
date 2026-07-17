import React, { useState, useEffect } from 'react';

export default function TowerOfHanoi() {
  const [towers, setTowers] = useState([
    [3, 2, 1], // Tower A (disks ordered by size, 3 is largest)
    [], // Tower B
    [] // Tower C
  ]);
  const [moves, setMoves] = useState([]);
  const [currentMove, setCurrentMove] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate solution moves
  useEffect(() => {
    const solutionMoves = [];
    const generateMoves = (n, source, target, auxiliary) => {
      if (n === 1) {
        solutionMoves.push([source, target]);
        return;
      }
      generateMoves(n - 1, source, auxiliary, target);
      solutionMoves.push([source, target]);
      generateMoves(n - 1, auxiliary, target, source);
    };
    generateMoves(3, 0, 2, 1);
    setMoves(solutionMoves);
  }, []);

  // Handle animation
  useEffect(() => {
    if (!isPlaying || currentMove >= moves.length - 1) return;

    const timer = setTimeout(() => {
      moveDisk();
    }, 1000); // Default speed set to 1000ms

    return () => clearTimeout(timer);
  }, [isPlaying, currentMove]);

  // Move disk function
  const moveDisk = () => {
    if (currentMove + 1 >= moves.length) {
      setIsPlaying(false);
      return;
    }

    const [from, to] = moves[currentMove + 1];
    const newTowers = towers.map(tower => [...tower]);
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
    setCurrentMove(prev => prev + 1);
  };

  // Reset function
  const resetGame = () => {
    setTowers([[3, 2, 1], [], []]);
    setCurrentMove(-1);
    setIsPlaying(false);
  };

  // Get disk style based on size
  const getDiskStyle = (size) => {
    const colors = {
      1: 'bg-blue-500',
      2: 'bg-yellow-300',
      3: 'bg-purple-700'
    };
    const widths = {
      1: 'w-16',
      2: 'w-24',
      3: 'w-32'
    };
    return `${colors[size]} ${widths[size]} h-4 rounded transition-all duration-500`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6"> {/* Reduced gap here */}
  {/* Controls */}
  <div className="flex gap-3 mb-3"> {/* Reduced gap here */}
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="px-3 py-1 bg-[#0D7C66] text-white text-xs rounded hover:bg-[#41B3A2] transition"
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button>
    <button
      onClick={resetGame}
      className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition"
    >
      Reset
    </button>
  </div>

  {/* Game Status */}
  <div className="text-center text-sm mb-2"> {/* Reduced margin here */}
    <p>Moves: {currentMove + 1} / {moves.length}</p>
  </div>

  {/* Towers */}
  <div className="flex justify-center items-end gap-12 mb-4"> {/* Reduced gap and margin */}
    {towers.map((tower, towerIndex) => (
      <div key={towerIndex} className="flex flex-col items-center">
        <div className="relative w-2 h-40 bg-orange-500">
          {/* Disks */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-0">
            {tower.map((diskSize, diskIndex) => (
              <div
                key={diskIndex}
                className={getDiskStyle(diskSize)}
              />
            ))}
          </div>
        </div>
        <div className="w-32 h-2 bg-orange-500 mt-1" /> {/* Reduced margin */}
        <div className="text-xs font-medium">
          Tower {String.fromCharCode(65 + towerIndex)}
        </div>
      </div>
    ))}
  </div>

  {/* Move Description */}
  <div className=" bottom-4 text-sm font-bold mb-2"> {/* Adjusted margin */}
    {currentMove >= 0 && currentMove < moves.length && (
      <div className="bg-slate-200 p-4 rounded ">
        Move disk from Tower {String.fromCharCode(65 + moves[currentMove][0])} to Tower {String.fromCharCode(65 + moves[currentMove][1])}
      </div>
    )}
  </div>
</div>
  )
}
