import { observable } from "mobx";
import TechLevelModel from "./TechLevelModel";

export default class TechnologyModel {
  id;
  name;
  @observable techLevels = [];

  constructor({
    id,
    name,
    levels,
  }) {
    this.id = id;
    this.name = name;

    this.techLevels = [];
    for (let levelParams of levels) {
      this.techLevels.push(new TechLevelModel(levelParams));
    }
  }
}