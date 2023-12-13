import React, { useState } from 'react';
import '../css/Breathe.css';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import SettingsContext from '../components/SettingsContext';
import Logo from "../components/Logo";
import char3 from "../assets/char3.svg"

export const Breathe = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div style={{ overflow:"hidden", position: 'relative'}}>
      <Logo />
      <img src={char3} alt="char3" style={{ position: "absolute", top: 715, right: 100 }} />
      <main className='breathe' >
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


