import React, { useState } from 'react';
import { Trophy, History, Save, RotateCcw } from 'lucide-react'; // I added an icon for the header!

// We import 'useState' above. This is a "Hook".
// It is the magic function that lets React "remember" data (like a score)
// and update the screen whenever that data changes.

export default function GoalCounter() {
  // --- STATE (The Memory) ---
  
  // Syntax: const [variableName, functionToChangeIt] = useState(initialValue);
  const [blueScore, setBlueScore] = useState(0);
  const [orangeScore, setOrangeScore] = useState(0);

  // Series History State (Array of previous game objects)
  // Example: [{ blue: 3, orange: 1 }, { blue: 2, orange: 4 }]
  const [gameHistory, setGameHistory] = useState([]);

  // --- DERIVED STATE (Calculated automatically) ---
  // We calculate the Series Score by looking at who won each game in history
  const blueGameWins = gameHistory.filter(game => game.blue > game.orange).length;
  const orangeGameWins = gameHistory.filter(game => game.orange > game.blue).length;

  // Best of 5 Logic: First to 3 wins
  const isSeriesOver = blueGameWins >= 3 || orangeGameWins >= 3;

  // --- SOUND EFFECTS ---
  const playGoalSound = () => {
    // We create a temporary Audio object to play the sound.
    // NOTE: To use your own file, put 'goal.mp3' in your 'public' folder 
    // and change the URL below to just '/goal.mp3'.
    const audio = new Audio('/Carrying Sound Effect.mp3'); 
    audio.volume = 0.05; // Set volume to 50% so it's not too loud
    
    // We catch errors because sometimes browsers block auto-playing sounds
    audio.play().catch((err) => console.log("Audio playback failed:", err));
  };

  // --- LOGIC (The Brains) ---

  // A simple function to add 1 to the Blue score
  const handleBlueGoal = () => {
    // We NEVER say "blueScore = blueScore + 1" in React.
    // We MUST use the setting function we created above.
    setBlueScore(blueScore + 1);
    // playGoalSound();
  };

  const handleOrangeGoal = () => {
    setOrangeScore(orangeScore + 1);
    // playGoalSound();
  };

  const handleFinishGame = () => {
    if (blueScore === orangeScore) {
      // Game score validation - no ties
      alert("Games cannot end in a tie.");
      return;
    }

    // Add current game to history
    const newGameResult = {blue: blueScore, orange: orangeScore};
    setGameHistory([...gameHistory, newGameResult]);

    // Reset counters
    setBlueScore(0);
    setOrangeScore(0);
  }

  const resetSeries = () => {
    if (window.confirm("Are you sure you want to start a brand new Series?")) {
      setBlueScore(0);
      setOrangeScore(0);
      setGameHistory([]);
    }
  };

  /**
   * Display header "Chinney Six Mans" w/ purple background
   */
  const renderHeader = () => (
    <header className='w-full bg-chinney-purple border-b-2 border-chinney-gold p-4 shadow-lg' >
      <div className='max-w-7x1 mx-auto flex items-center gap-3'>
        <div className='p-2 bg-chinney-purple rounded-lg'>
          <Trophy size={20} className='text-white'/>
        </div>
        <span className='text-xl font-bold tracking-tight'>Chinney Six Mans</span>
      </div>
    </header>
  );

  /**
   * Render Series Score.
   */
  const renderSeriesScoreboard = () => (
    <div className="flex flex-col items-center mb-10">
      <h3 className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Series Score (Best of 5)</h3>
      <div className="flex items-center gap-6 text-5xl font-black">
        <span className={blueGameWins > orangeGameWins ? "text-blue-500" : "text-white"}>
          {blueGameWins}
        </span>
        <span className="text-slate-600 text-2xl">-</span>
        <span className={orangeGameWins > blueGameWins ? "text-orange-500" : "text-white"}>
          {orangeGameWins}
        </span>
      </div>
      {/* Series Winner Message */}
      {isSeriesOver && (
        <div className="mt-4 px-6 py-2 bg-chinney-gold text-slate-900 rounded-full font-bold animate-bounce">
          🏆 {blueGameWins >= 3 ? "BLUE" : "ORANGE"} WINS THE SERIES! 🏆
        </div>
      )}
    </div>
  );

  const renderScoreboard = () => (
    <div className={`transition-opacity duration-300 ${isSeriesOver ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
       <div className="text-center mb-6">
         <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
           Current Game {gameHistory.length + 1}
         </span>
       </div>

       <div className="flex gap-8 sm:gap-16 items-center mb-8">
        {/* BLUE TEAM */}
        <div className="flex flex-col items-center">
          <h2 className="text-blue-500 text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-widest">Blue</h2>
          <div className="text-6xl sm:text-8xl font-mono font-black mb-6 bg-slate-800 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-xl border-4 border-slate-700">
            {blueScore}
          </div>
          <button 
            onClick={handleBlueGoal}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Blue Goal
          </button>
        </div>

        <div className="text-slate-600 text-xl font-bold">VS</div>

        {/* ORANGE TEAM */}
        <div className="flex flex-col items-center">
          <h2 className="text-orange-500 text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-widest">Orange</h2>
          <div className="text-6xl sm:text-8xl font-mono font-black mb-6 bg-slate-800 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-xl border-4 border-slate-700">
            {orangeScore}
          </div>
          <button 
            onClick={handleOrangeGoal}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all shadow-lg shadow-orange-600/20 active:scale-95"
          >
            Orange Goal
          </button>
        </div>
      </div>
      
      {/* Finish Game Button */}
      <div className="flex justify-center mb-12">
        <button
          onClick={handleFinishGame}
          className="flex items-center gap-2 bg-slate-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-slate-600 hover:border-green-500"
        >
          <Save size={18} />
          Save & Next Game
        </button>
      </div>
    </div>
  );

  const renderHistory = () => {
    if (gameHistory.length === 0) return null;

    return (
      <div className="w-full max-w-lg bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
          <History size={16} /> Previous Games
        </h3>
        <div className="space-y-2">
          {gameHistory.map((game, index) => {
            const winner = game.blue > game.orange ? 'blue' : 'orange';
            return (
              <div key={index} className="flex justify-between items-center bg-slate-900 p-3 rounded border border-slate-800">
                <span className="text-slate-500 font-mono text-sm">Game {index + 1}</span>
                <div className="flex gap-4 font-bold">
                  <span className={winner === 'blue' ? 'text-blue-400' : 'text-slate-600'}>Blue {game.blue}</span>
                  <span className="text-slate-700">-</span>
                  <span className={winner === 'orange' ? 'text-orange-400' : 'text-slate-600'}>Orange {game.orange}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  };

  const renderStatusMessage = () => {
    return (
      <div className="h-16 mb-8 text-center">
        {blueScore > orangeScore && (
          <p className="text-blue-400 text-2xl font-bold animate-bounce">Blue is winning!</p>
        )}
        {orangeScore > blueScore && (
          <p className="text-orange-400 text-2xl font-bold animate-bounce">Orange is winning!</p>
        )}
        {blueScore === orangeScore && blueScore > 0 && (
          <p className="text-slate-400 text-xl font-medium">It's a tie game!</p>
        )}
      </div>
    );
  };

  // --- JSX (The View) ---
  // This looks like HTML, but it's JavaScript.
  return (

    <div className="min-h-screen bg-slate-900 flex flex-col text-white font-sans">

      {renderHeader()}

      <main className='flex-grow flex flex-col items-center justify-center'>

        <h1 className="text-4xl font-bold mb-12 text-slate-200">Mini Match Tracker</h1>

        {renderSeriesScoreboard()}

        {renderScoreboard()}

        {renderHistory()}

        {/* Reset Series Button (at the very bottom) */}
        <button 
          onClick={resetSeries}
          className="mt-12 flex items-center gap-2 text-slate-500 hover:text-red-400 transition-colors text-sm font-medium"
        >
          <RotateCcw size={14} />
          Reset Entire Series
        </button>

      </main>
    </div>
  );
}