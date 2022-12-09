import { action, observable } from "mobx";
import technologiesConfigs from "../config/technologies";
import ProductionColumnModel from "./ProductionColumnModel";
import TechnologyModel from "./TechnologyModel";
import settings from "../config/settings";
import { TECH_LEVEL_STATE } from "./enums";

export default class SheetModel {
  @observable technologies = [];
  @observable productionColumns = [];
  @observable activeProductionColumn;

  constructor() {
    this.reset();

    this.reset = this.reset.bind(this);
    this.moveToPrevProductionColumn = this.moveToPrevProductionColumn.bind(this);
    this.moveToNextProductionColumn = this.moveToNextProductionColumn.bind(this);
    this.fetchPrevColumnProduction = this.fetchPrevColumnProduction.bind(this);
    this.acceptAllTechLevels = this.acceptAllTechLevels.bind(this);
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
    for (let i = 1; i <= settings.NO_OF_PHASES; i++) {
      this.productionColumns.push(
        new ProductionColumnModel({ phase: i })
      );
    }

    for (let i = 1; i <= settings.NO_OF_PHASES - 1; i++) {
      this.productionColumns[i - 1].nextProductionColumn = this.productionColumns[i];
    }

    this.productionColumns[0].isActive = true;
    this.activeProductionColumn = this.productionColumns[0];
  }

  @action
  moveToPrevProductionColumn() {
    const { phase } = this.activeProductionColumn;
    if (phase === 1) {
      return;
    }
    this.activeProductionColumn.isActive = false;
    this.activeProductionColumn = this.productionColumns[phase - 2];
    this.activeProductionColumn.isActive = true;
  }

  @action
  moveToNextProductionColumn() {
    const { phase } = this.activeProductionColumn;
    if (phase === settings.NO_OF_PHASES) {
      return;
    }
    this.activeProductionColumn.isActive = false;
    this.activeProductionColumn = this.productionColumns[phase];
    this.activeProductionColumn.isActive = true;
  }

  @action
  fetchPrevColumnProduction() {
    const { phase } = this.activeProductionColumn;
    if (phase === 1) {
      return;
    }
    const prevProductionColumn = this.productionColumns[phase - 2];
    this.activeProductionColumn.colonyCP = prevProductionColumn.colonyCP;
    this.activeProductionColumn.msPipelineCP = prevProductionColumn.msPipelineCP;
    this.activeProductionColumn.industrialCenterCP = prevProductionColumn.industrialCenterCP;
    this.activeProductionColumn.researchCenterRP = prevProductionColumn.researchCenterRP;
  }

  @action
  acceptAllTechLevels() {
    for (let technology of this.technologies) {
      for (let techLevel of technology.techLevels) {
        if (techLevel.state === TECH_LEVEL_STATE.MARKED) {
          techLevel.state = TECH_LEVEL_STATE.OWNED;
        }
      }
    }
  }
}