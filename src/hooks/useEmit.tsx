import { useContext } from 'react';
import { CharacterContext } from '../Spawn';

export default () => {
  const context = useContext(CharacterContext);
  return context;
};