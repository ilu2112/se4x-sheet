import { action, observable } from "mobx";
import technologiesConfigs from "../config/technologies";
import TechnologyModel from "./TechnologyModel";

export default class SheetModel {
  @observable technologies = [];

  constructor() {
    this.reset();
  }

  @action
  reset() {
    this.technologies = [];
    for (let techConfig of technologiesConfigs) {
      this.technologies.push(
        new TechnologyModel(techConfig)
      );
    }
  }
}