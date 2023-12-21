import React from 'react';
// import styles from '../components/FooterInteraction/FooterInteraction.module.scss';
// import { Filter } from '@components/Filter/Filter';
// import { IconHouse, IconLastPosition } from '@ui/Icons/Icons';
import { CharacterContext, ISpawns } from '../Spawn';
import './characterSelector.css';
// import { Trigger } from '../../rage/triggers';

const FooterInteraction: React.FC<{ spawn?: ISpawns }> = ({ spawn }) => {
  return (
    <CharacterContext.Consumer>
      {
        character => (
          <div className='character_selector_container' onClick={ () => {
            //@ts-ignore
            character.emit(spawn);
          } }>
            <div className='card_container'>
              <p className='card-title'>Daniel Moris</p>
              <img src='/imgs/default_avatar.png' height={ 166 } width={ 166 } className='card_avatar' ></img>
              <div className='level'>
                <span className='name'>Уровень</span>
                <span className='value'>26</span>
              </div>
              <div className='card_progress'>
                <div className='fill'></div>
              </div>
              <div className='gender'>
                <span className='name'>Пол персонажа</span>
                <span className='value'>Мужской</span>
              </div>
              <div className='age gender'>
                <span className='name'>Возраст</span>
                <span className='value'>28 лет</span>
              </div>
              <div className='gender self_ballance'>
                <span className='name'>Деньги на руках</span>
                <span className='value'>100 000 $</span>
              </div>
              <div className='gender bank_ballance'>
                <span className='name'>Деньги в банке</span>
                <span className='value'>10 000 $</span>
              </div>
              <div className='online gender'>
                <span className='name'>Общий онлайн</span>
                <span className='value'>1 дн. 2ч. 30м.</span>
              </div>
              <div className='button_group'>
                <button className='cancel'>Удалить</button>
                <button className='start'>Начать</button>
              </div>
            </div>
            <div className='card_container'>
              <p className='card-title'>Dasus Tomas</p>
              <img src='/imgs/avatar.png' height={ 166 } width={ 166 } className='card_avatar' ></img>
              <div className='level'>
                <span className='name'>Уровень</span>
                <span className='value'>16</span>
              </div>
              <div className='card_progress'>
                <div className='fill'></div>
              </div>
              <div className='gender'>
                <span className='name'>Пол персонажа</span>
                <span className='value'>Мужской</span>
              </div>
              <div className='age gender'>
                <span className='name'>Возраст</span>
                <span className='value'>28 лет</span>
              </div>
              <div className='gender self_ballance'>
                <span className='name'>Деньги на руках</span>
                <span className='value'>100 000 $</span>
              </div>
              <div className='gender bank_ballance'>
                <span className='name'>Деньги в банке</span>
                <span className='value'>63 000 $</span>
              </div>
              <div className='online gender'>
                <span className='name'>Общий онлайн</span>
                <span className='value'>1 дн. 2ч. 30м.</span>
              </div>
              <div className='button_group'>
                <button className='cancel'>Удалить</button>
                <button className='start'>Начать</button>
              </div>
            </div>
            <div className='card_container'>
              <p className='card-title'>Dasus Tomas</p>
              <img src='/imgs/default_avatar.png' height={ 166 } width={ 166 } className='card_avatar' ></img>
              <div className='level'>
                <span className='name'>Уровень</span>
                <span className='value'>16</span>
              </div>
              <div className='card_progress'>
                <div className='fill'></div>
              </div>
              <div className='gender'>
                <span className='name'>Пол персонажа</span>
                <span className='value'>Мужской</span>
              </div>
              <div className='age gender'>
                <span className='name'>Возраст</span>
                <span className='value'>28 лет</span>
              </div>
              <div className='gender self_ballance'>
                <span className='name'>Деньги на руках</span>
                <span className='value'>100 000 $</span>
              </div>
              <div className='gender bank_ballance'>
                <span className='name'>Деньги в банке</span>
                <span className='value'>63 000 $</span>
              </div>
              <div className='online gender'>
                <span className='name'>Общий онлайн</span>
                <span className='value'>1 дн. 2ч. 30м.</span>
              </div>
              <div className='button_group'>
                <button className='cancel'>Удалить</button>
                <button className='start'>Начать</button>
              </div>
            </div>
          </div>
        )
      }
    </CharacterContext.Consumer>
  );
};

export default FooterInteraction;