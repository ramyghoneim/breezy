import React, { useState } from 'react';
import '../css/Breathe.css';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import SettingsContext from '../components/SettingsContext';
import Logo from "../components/Logo";


export const Breathe = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div>
      <Logo />
      <main className='breathe'>
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </div>
  );
};


