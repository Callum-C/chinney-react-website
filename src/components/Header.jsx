import React from 'react';
import { Trophy } from 'lucide-react'

export default function renderHeader() {

  return (
    <header className='app-header'>

      <div className='header-brand-row'>
        <div className='header-brand-container'>
          <div className='p-2 rounded-lg'>
            <Trophy size={20} className='text-chinney-gold'/>
          </div>
          <span className='text-xl text-white font-bold tracking-tight'>Chinney Six Mans</span>
        </div>
      </div>
      

      <div className='header-nav-row'>
        <div className='header-nav-container'>
          <nav>
            <ul className='header-nav-bar'>
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