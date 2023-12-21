import React, { createContext, useEffect, useState } from 'react';
// import styles from './Spawn.module.scss';
// import { Title } from '@components/Title/Title';
// import { PointsList } from '@components/PointsList/PointsList';
// import { FooterInteraction } from '@components/FooterInteraction/FooterInteraction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SpawnSelector from '@pages/spawnSelector';
import CharacterSelector from '@pages/characterSelector';


export type ISpawns = 'ballas' | 'gov' | 'army' | 'sheriff' | 'airport' | 'house' | 'last:position'; // Update Points To src/config/SpawnPoints.json

type CharacterContextType = {
  info: ICharacter,
  activeSpawn?: ISpawns,
  emit?: (data: string) => void
};

interface ICharacter {
  house: boolean
  lastPosition: boolean
  organization?: ISpawns
}

const initialState = {
  info: {} as ICharacter,
  // emit: (data: string) => {}
};

export const CharacterContext = createContext<CharacterContextType>(initialState);

function Spawn() {
  const [character, setCharacter] = useState<ICharacter>({ house: true, lastPosition: false, organization: undefined });
  // const [activeSpawn, setActiveSpawn] = useState<ISpawns | undefined>();

  useEffect(() => { 

    // @ts-ignore
    // console.log(window.mp);

    // @ts-ignore
    if (global.mp) {
      // @ts-ignore
      global.mp.events.add('EVENT:NAME', (data: string) => {  // JSON.STRINGIFY OBJECT ICharacter Interface
        const info: ICharacter = JSON.parse(data);
        setCharacter(info);
      });
      console.log('asdfasdf');
    } 
  });

  const emit = ( data: string ) => {

    if(!data){
      return;
    }

    const info: ICharacter = {
      house: data === 'house',
      lastPosition: data === 'last:position'
    };
    setCharacter(info);
    console.log(info);
  };

  return (
    <CharacterContext.Provider value={{ info: character, emit: emit }}>
      {/* <div className={ styles.wrapper }>
        <Title />
        <FooterInteraction spawn={ activeSpawn! } />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ SpawnSelector } />
          <Route path='/character' Component={ CharacterSelector } />
        </Routes>
      </BrowserRouter>
      {/* <PointsList
        activeSpawn={ activeSpawn }
        setActiveSpawn={ (trigger) => setActiveSpawn(trigger) }
      /> */}
    </CharacterContext.Provider>
  );
}

export default Spawn;
