import { ISpawns } from '../Spawn';

const spawnToPoint = (spawn: ISpawns | undefined) => {
  if (!spawn) return;

  console.log(spawn);
  //@ts-ignore
  global.mp.trigger('EVENT:NAME', spawn);
  //@ts-ignore
  // console.log(global.mp);
};

export const Trigger = {
  spawnToPoint
};