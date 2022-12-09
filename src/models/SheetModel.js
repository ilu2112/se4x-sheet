import { action, observable } from "mobx";
import technologiesConfigs from "../config/technologies";
import ProductionColumnModel from "./ProductionColumnModel";
import TechnologyModel from "./TechnologyModel";

export default class SheetModel {
  @observable technologies = [];
  @observable productionColumns = [];

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

    this.productionColumns = [];
    for (let i = 1; i <= 40; i++) {
      this.productionColumns.push(
        new ProductionColumnModel({ phase: i })
      );
    }
  }
}