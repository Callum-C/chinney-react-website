import React from 'react';
import Header from './components/Header'
import Leaderboard from './components/Leaderboard'


export default function App() {

  return (
    <div className='w-full bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-chinney-purple selection:text-white'> 
      <Header />
      
      <main className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Leaderboard />
      </main>
      
    </div>
  )
}