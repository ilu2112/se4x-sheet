import { action, observable } from "mobx";

export default class ProductionColumnModel {
  phase;
  @observable cpCarriedOver;
  @observable colonyCP;
  @observable mineralCP;
  @observable msPipelineCP;
  @observable industrialCenterCP;
  @observable maintenance;
  @observable turnOrderBid;
  @observable cpConvertedToRP;
  @observable purchases;
  @observable remainingCP;
  @observable cpSpentOnUpgrades;
  @observable maintenanceIncrease;
  @observable maintenanceDecrease;
  @observable rpCarriedOver;
  @observable researchCenterRP;
  @observable technologySpending;
  @observable remainingRP;

  constructor({
    phase,
    cpCarriedOver,
    colonyCP,
    mineralCP,
    msPipelineCP,
    industrialCenterCP,
    maintenance,
    turnOrderBid,
    cpConvertedToRP,
    purchases,
    remainingCP,
    cpSpentOnUpgrades,
    maintenanceIncrease,
    maintenanceDecrease,
    rpCarriedOver,
    researchCenterRP,
    technologySpending,
    remainingRP,
  }) {
    this.phase = phase;
    this.cpCarriedOver = cpCarriedOver || 0;
    this.colonyCP = colonyCP || 0;
    this.mineralCP = mineralCP || 0;
    this.msPipelineCP = msPipelineCP || 0;
    this.industrialCenterCP = industrialCenterCP || 0;
    this.maintenance = maintenance || 0;
    this.turnOrderBid = turnOrderBid || 0;
    this.cpConvertedToRP = cpConvertedToRP || 0;
    this.purchases = purchases || 0;
    this.remainingCP = remainingCP || 0;
    this.cpSpentOnUpgrades = cpSpentOnUpgrades || 0;
    this.maintenanceIncrease = maintenanceIncrease || 0;
    this.maintenanceDecrease = maintenanceDecrease || 0;
    this.rpCarriedOver = rpCarriedOver || 0;
    this.researchCenterRP = researchCenterRP || 0;
    this.technologySpending = technologySpending || 0;
    this.remainingRP = remainingRP || 0;

    this.updateField = this.updateField.bind(this);
  }

  @action
  updateField(fieldName, value) {
    this[fieldName] = parseInt(value, 10) || 0;
  }
}