import { observable } from "mobx";
import TechLevelModel from "./TechLevelModel";

export default class TechnologyModel {
  id;
  name;
  @observable techLevels = [];

  constructor({
    id,
    name,
    techLevels,
  }) {
    this.id = id;
    this.name = name;

    this.techLevels = [];
    for (let levelParams of techLevels) {
      this.techLevels.push(new TechLevelModel(levelParams));
    }
  }
}