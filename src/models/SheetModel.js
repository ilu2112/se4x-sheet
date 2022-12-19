import { action, observable, computed } from "mobx";
import _ from "lodash";

import technologiesConfigs from "../config/technologies";
import ProductionColumnModel from "./ProductionColumnModel";
import TechnologyModel from "./TechnologyModel";
import settings from "../config/settings";
import { TECH_LEVEL_STATE } from "./enums";
import UnitModel from "./UnitModel";

export default class SheetModel {
  @observable technologies = [];
  @observable productionColumns = [];
  @observable units = [];
  @observable activeProductionColumn;
  @observable shouldSyncTechSpendings;

  constructor(initialState) {
    if (_.isEmpty(initialState)) {
      this.reset();
    } else {
      try {
        this._setState(initialState);
      } catch (e) {
        console.log("Could not set intialState - resetting!", e);
        this.reset();
      }
    }

    this.reset = this.reset.bind(this);
    this.moveToPrevProductionColumn = this.moveToPrevProductionColumn.bind(this);
    this.moveToNextProductionColumn = this.moveToNextProductionColumn.bind(this);
    this.fetchPrevColumnProduction = this.fetchPrevColumnProduction.bind(this);
    this.acceptAllTechLevels = this.acceptAllTechLevels.bind(this);
    this.toggleShouldSyncTechSpendings = this.toggleShouldSyncTechSpendings.bind(this);
    this.addNewUnit = this.addNewUnit.bind(this);
    this.removeUnit = this.removeUnit.bind(this);
    this.reorderUnits = this.reorderUnits.bind(this);
    this.copyUnit = this.copyUnit.bind(this);
    this.setAllUnitsEditable = this.setAllUnitsEditable.bind(this);
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
    this.shouldSyncTechSpendings = false;
    this.units = [];

    this.addNewUnit();
    this.units[0].updateField("name", "SY-1");
    this.units[0].quantity = 4;
    this.units[0].isEditable = false;
    this.addNewUnit();
    this.units[1].updateField("name", "Miner-1");
    this.units[1].isEditable = false;
    this.addNewUnit();
    this.units[2].updateField("name", "SC-1");
    this.units[2].isEditable = false;
    this.addNewUnit();
    this.units[3].updateField("name", "SC-2");
    this.units[3].isEditable = false;
    this.addNewUnit();
    this.units[4].updateField("name", "SC-3");
    this.units[4].isEditable = false;
    this.addNewUnit();
    this.units[5].updateField("name", "FLAG");
    this.units[5].isEditable = false;
  }

  _setState(state) {
    this.technologies = [];
    for (let techConfig of state.technologies) {
      this.technologies.push(
        new TechnologyModel(techConfig)
      );
    }

    this.productionColumns = [];
    for (let productionColumnConfig of state.productionColumns) {
      this.productionColumns.push(
        new ProductionColumnModel(productionColumnConfig)
      );
    }

    for (let i = 1; i <= settings.NO_OF_PHASES - 1; i++) {
      this.productionColumns[i - 1].nextProductionColumn = this.productionColumns[i];
    }

    this.activeProductionColumn = _.find(this.productionColumns, c => c.isActive);
    this.shouldSyncTechSpendings = state.shouldSyncTechSpendings || false;

    this.units = [];
    for (let unit of state.units) {
      this.units.push(
        new UnitModel(unit)
      );
    }
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
    this.shouldSyncTechSpendings = false;
  }

  @action
  toggleShouldSyncTechSpendings() {
    this.shouldSyncTechSpendings = !this.shouldSyncTechSpendings;
    this.syncTechSpendingsIfNeeded();
  }

  @action
  syncTechSpendingsIfNeeded() {
    if (!this.shouldSyncTechSpendings) {
      return;
    }
    let total = 0;
    for (let technology of this.technologies) {
      for (let techLevel of technology.techLevels) {
        if (techLevel.state === TECH_LEVEL_STATE.MARKED) {
          total += techLevel.cost;
        }
      }
    }
    this.activeProductionColumn.updateField('technologySpending', total);
  }

  @action
  addNewUnit() {
    this.units.push(
      new UnitModel({
        id: parseInt(Math.random() * 1000000),
        name: null,
        quantity: 0,
        attack: 0,
        defense: 0,
        move: 1,
        experience: 0,
        technologies: [],
        hull: 0,
        upkeepCost: 0,
        isEditable: true,
      })
    );
  }

  @action
  removeUnit(id) {
    this.units = _.filter(this.units, u => u.id !== id);
  }

  @action
  reorderUnits(ids) {
    this.units = _.sortBy(this.units, u => ids.indexOf(u.id));
  }

  @action
  copyUnit(id) {
    const index = _.findIndex(this.units, u => u.id === id);
    const unit = this.units[index];
    this.units.splice(index + 1, 0, new UnitModel({
      ...unit,
      id: parseInt(Math.random() * 1000000),
    }));
  }

  @computed
  get totalUpkeepCost() {
    return _.sumBy(this.units, 'upkeepCost');
  }

  @action
  setAllUnitsEditable(value) {
    for (let unit of this.units) {
      unit.isEditable = value;
    }
  }
}