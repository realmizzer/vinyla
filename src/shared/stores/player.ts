import {makeAutoObservable} from 'mobx';

export enum PlayerState {
  IDLE,
  PLAYING,
}

export class PlayerStore {
  status: PlayerState = PlayerState.IDLE;

  constructor() {
    makeAutoObservable(this);
  }
}
