import { ChangeEvent } from "react";
import { makeAutoObservable } from "mobx";
import TestModel from "../model/testModel";

class ListItemStore {
  model: TestModel | null = null;
  text: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setText = (value: ChangeEvent<HTMLInputElement>) => {
    this.text = value.target.value;
  };
}

export const listItemStore = new ListItemStore();
