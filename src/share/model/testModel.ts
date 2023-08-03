import { makeAutoObservable } from "mobx";

class TestModel {
  text: string = "321";

  constructor({ text }: { text: string }) {
    makeAutoObservable(this);
    this.text = text;
  }

  setText = (value: string) => {
    this.text = value;
  };
}

export default TestModel;
