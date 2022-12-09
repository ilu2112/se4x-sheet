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

  @observable isActive;

  nextProductionColumn;

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
    isActive,
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
    this.isActive = isActive || false;

    this.updateField = this.updateField.bind(this);
  }

  @action
  updateField(fieldName, value) {
    this[fieldName] = parseInt(value, 10) || 0;
    this.recalculateTotals();
    this.populateNextColumn()
  }

  recalculateTotals() {
    this.remainingCP = 0
      + this.cpCarriedOver
      + this.colonyCP
      + this.mineralCP
      + this.msPipelineCP
      + this.industrialCenterCP
      - this.maintenance
      - this.turnOrderBid
      - this.cpConvertedToRP
      - this.purchases;   
    this.remainingRP = 0
      + this.rpCarriedOver
      + this.researchCenterRP
      + this.cpConvertedToRP
      - this.technologySpending;
  }

  populateNextColumn() {
    if (this.nextProductionColumn) {
      this.nextProductionColumn.cpCarriedOver = this.remainingCP - this.cpSpentOnUpgrades;
      this.nextProductionColumn.rpCarriedOver = this.remainingRP;
      this.nextProductionColumn.maintenance = this.maintenance - this.maintenanceDecrease + this.maintenanceIncrease;
      this.nextProductionColumn.recalculateTotals();
      this.nextProductionColumn.populateNextColumn();
    } 
  }
}