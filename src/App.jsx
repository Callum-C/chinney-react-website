import React, { useState } from 'react';
// We import 'useState' above. This is a "Hook".
// It is the magic function that lets React "remember" data (like a score)
// and update the screen whenever that data changes.

export default function GoalCounter() {
  // --- STATE (The Memory) ---
  
  // Syntax: const [variableName, functionToChangeIt] = useState(initialValue);
  const [blueScore, setBlueScore] = useState(0);
  const [orangeScore, setOrangeScore] = useState(0);

  // --- LOGIC (The Brains) ---

  // A simple function to add 1 to the Blue score
  const handleBlueGoal = () => {
    // We NEVER say "blueScore = blueScore + 1" in React.
    // We MUST use the setting function we created above.
    setBlueScore(blueScore + 1);
  };

  const handleOrangeGoal = () => {
    setOrangeScore(orangeScore + 1);
  };

  const resetGame = () => {
    setBlueScore(0);
    setOrangeScore(0);
  };

  // --- JSX (The View) ---
  // This looks like HTML, but it's JavaScript.
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white font-sans">
      
      <h1 className="text-4xl font-bold mb-12 text-slate-200">Mini Match Tracker</h1>

      {/* The Scoreboard Container */}
      <div className="flex gap-16 items-center mb-12">
        
        {/* BLUE TEAM SECTION */}
        <div className="flex flex-col items-center">
          <h2 className="text-blue-500 text-3xl font-bold mb-4 uppercase tracking-widest">Blue</h2>
          {/* Displaying the State variable */}
          <div className="text-8xl font-mono font-black mb-6 bg-slate-800 w-32 h-32 flex items-center justify-center rounded-xl border-4 border-slate-700">
            {blueScore}
          </div>
          {/* connecting the button click to our function */}
          <button 
            onClick={handleBlueGoal}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Blue Goal!
          </button>
        </div>

        <div className="text-slate-600 text-2xl font-bold">VS</div>

        {/* ORANGE TEAM SECTION */}
        <div className="flex flex-col items-center">
          <h2 className="text-orange-500 text-3xl font-bold mb-4 uppercase tracking-widest">Orange</h2>
          <div className="text-8xl font-mono font-black mb-6 bg-slate-800 w-32 h-32 flex items-center justify-center rounded-xl border-4 border-slate-700">
            {orangeScore}
          </div>
          <button 
            onClick={handleOrangeGoal}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-orange-600/20 active:scale-95"
          >
            Orange Goal!
          </button>
        </div>

      </div>

      {/* CONDITIONAL RENDERING (Show text only if someone is leading) */}
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

      {/* Reset Button */}
      <button 
        onClick={resetGame}
        className="text-slate-500 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors"
      >
        Reset Scores
      </button>

    </div>
  );
}