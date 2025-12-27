import React from 'react';
import { Trophy } from 'lucide-react'

export default function renderHeader() {

  return (
    <header className='w-full shadow-lg mb-8'>

      <div className='w-full bg-chinney-purple border-b-2 border-chinney-gold'>
        <div className='max-w-7xl mx-auto p-4 flex items-center justify-center gap-3'>
          <div className='p-2 rounded-lg'>
            <Trophy size={20} className='text-chinney-gold'/>
          </div>
          <span className='text-xl text-white font-bold tracking-tight'>Chinney Six Mans</span>
        </div>
      </div>
      

      <div className='w-full bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 py-3'>
          <nav>
            <ul className='bg-slate-800 flex justify-center gap-8 text-sm font-medium text-slate-100'>
              <li>
                <a className='header-nav-link' href =''>Player Lookup</a>
              </li>
              <li>
                <a className='header-nav-link' href =''>Leaderboard</a>
              </li>
              <li>
                <a className='header-nav-link' href =''>Matches</a>
              </li>
              <li>
                <a className='header-nav-link' href =''>Rules and Info</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      

    </header>
  );
}