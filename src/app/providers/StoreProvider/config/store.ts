import {makeAutoObservable} from 'mobx';
import {PlayerStore} from '~/shared/stores';

export class RootStore {
  player: PlayerStore = new PlayerStore();

  constructor() {
    makeAutoObservable(this);
  }
}
