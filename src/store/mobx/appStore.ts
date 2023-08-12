import { makeAutoObservable } from "mobx";
import TestModel from "../../model/testModel";

class AppStore {
  text: string = "123";
  list: TestModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export const appStore = new AppStore();
