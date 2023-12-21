import React from 'react';
// import styles from '../components/FooterInteraction/FooterInteraction.module.scss';
// import { Filter } from '@components/Filter/Filter';
// import { IconHouse, IconLastPosition } from '@ui/Icons/Icons';
import { CharacterContext, ISpawns } from '../Spawn';
import './spawnSelector.css';
// import { Trigger } from '../../rage/triggers';

const FooterInteraction: React.FC<{ spawn?: ISpawns }> = ({ spawn }) => {
  return (
    <CharacterContext.Consumer>
      {
        character => (
          <div className='spawn_selector_container'>
            <div className='bg1 center' onClick={ () => {
              //@ts-ignore
              character.emit(spawn);
            } }>
              <div className='circle center'>
                <div className='circle-home center'>
                  <img src='/imgs/home.png' width='50%'></img>
                </div>
              </div>
              <div className='comment'>
                Место появления: Дом
                <p>
                  У вас нету дома, приобретите себе недвижимость,<br></br> 
                  чтобы<br></br>
                  получить возможность в ней появиться
                </p>
              </div>
            </div>
            <div className='bg2 center' onClick={ () => {
              //@ts-ignore
              character.emit(spawn);
            } }>
              <div className='circle center'>
                <div className='circle-pos center'>
                  <img src='/imgs/pos.svg' width='50%'></img>
                </div>
              </div>
              <div className='comment'>
                Место появления: Спавн
                <p>
                  Вы появитесь на месте <br></br>спавна
                </p>
              </div>
            </div>
            <div className='bg3 center' onClick={ () => {
              //@ts-ignore
              character.emit(spawn);
            } }>
              <div className='circle center'>
                <div className='circle-other center'>
                  <img src='/imgs/other.svg' width='50%'></img>
                </div>
              </div>
              <div className='comment'>
                Место появления: Место выхода
                <p>
                  Вы появитесь на месте где вы находились перед <br></br>
                  последним выходом из игры
                </p>
              </div>
            </div>
          </div>
          // <div className={ styles.wrapper } >
          //   <button
          //     onClick={ () => {
          //       // @ts-ignore
          //       character.emit(spawn);
          //     } }
          //     className= { [
          //       styles.spawnToPoint, spawn && styles.spawnToPointActive
          //     ].join(' ') }
          //   >
          //     <p>Появиться в выбранной точке</p>
          //     {spawn && spawn.length > 0 && <Filter.Gradient mouse={{ onMouseMove: true }} />}
          //   </button>
          //   {
          //     character.info.house && (
          //       <div className={ styles.contentSpawnBlock } >
          //         <button
          //           onClick={ () => {
          //             // @ts-ignore
          //             character.emit('house');
          //           } }
          //           className={ styles.spawnBlock }
          //         >
          //           <Filter.Gradient />
          //           <IconHouse />
          //         </button>
          //         <div className={ styles.hideName }>
          //           Дома
          //         </div>
          //       </div>
          //     )
          //   }
          //   {
          //     character.info.lastPosition && (
          //       <div className={ styles.contentSpawnBlock } >
          //         <button
          //           onClick={ () => {
          //             //@ts-ignore
          //             character.emit('last:position');
          //           } }
          //           className={ styles.spawnBlock }
          //         >
          //           <Filter.Gradient />
          //           <IconLastPosition />
          //         </button>
          //         <div className={ styles.hideName }>
          //           На месте выхода
          //         </div>
          //       </div>
          //     )
          //   }
          // </div>
        )
      }
    </CharacterContext.Consumer>
  );
};

export default FooterInteraction;