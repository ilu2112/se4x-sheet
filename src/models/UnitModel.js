import { action, observable, computed } from "mobx";
import _ from "lodash";
import UnitTechnologyModel from "./UnitTechnologyModel";
import { getUnitConfig } from "../config/units";
import { sheetStore } from "./store";

export default class UnitModel {
  @observable id;
  @observable name;
  @observable quantity;
  @observable attack;
  @observable defense;
  @observable reactThreshold;
  @observable immovable;
  @observable unupgradable;
  @observable move;
  @observable tactic;
  @observable canGainExperience;
  @observable experience;
  @observable technologies = [];
  @observable hull;
  @observable upkeepCost;
  @observable singularUpkeepCost;

  @observable isEditable;

  constructor({
    id,
    name,
    quantity,
    attack,
    defense,
    reactThreshold,
    immovable,
    unupgradable,
    move,
    tactic,
    canGainExp,
    experience,
    technologies,
    hull,
    upkeepCost,
    singularUpkeepCost,
    isEditable,
  }) {
    this.id = id;
    this.name = name || "-";
    this.quantity = quantity || 0;
    this.attack = attack || 0;
    this.defense = defense || 0;
    this.reactThreshold = reactThreshold || 99999;
    this.immovable = immovable || false;
    this.unupgradable = unupgradable || false;
    this.move = move || 1;
    this.tactic = tactic || 0;
    this.canGainExp = canGainExp || false;
    this.experience = experience || 0;
    this.hull = hull || 1;
    this.upkeepCost = _.isNil(upkeepCost) ? this.quantity * this.hull : upkeepCost;
    this.singularUpkeepCost = singularUpkeepCost || 0;
    this.isEditable = isEditable || false;

    this.technologies = [];
    for (let technology of technologies) {
      this.technologies.push(
        new UnitTechnologyModel(technology)
      );
    }

    this.updateField = this.updateField.bind(this);
    this.toggleIsEditable = this.toggleIsEditable.bind(this);
    this.isUpkeepCostUnmodified = this.isUpkeepCostUnmodified.bind(this);
  }

  @action
  updateField(fieldName, value) {
    if (fieldName === "name") {
      this.updateName(value);
      return;
    }
    const parsedValue = parseInt(value, 10) || 0;
    if (fieldName === "quantity") {
      this.updateQuantity(parsedValue);
      return;
    }
    this[fieldName] = parsedValue;
  }

  updateName(name) {
    const oldUnitType = this.name.split("-")[0];
    const oldUnitConfig = getUnitConfig(this.name);
    const newUnitType = name.split("-")[0];
    const newUnitConfig = getUnitConfig(name);
    
    this.name = name;
    if (oldUnitType !== newUnitType) {
      this.hull = newUnitConfig.hull;
      this.singularUpkeepCost = newUnitConfig.upkeepCost;
      this.upkeepCost = this.singularUpkeepCost * this.quantity;
      this.canGainExp = newUnitConfig.canGainExp;
      this.reactThreshold = newUnitConfig.reactThreshold || 99999;
      this.immovable = newUnitConfig.immovable;
      this.unupgradable = newUnitConfig.unupgradable || false;
      this.technologies = newUnitConfig.availableTechs.map(
        name => new UnitTechnologyModel({ name })
      );
    }

    const oldCost = this.quantity * oldUnitConfig.cost;
    const newCost = this.quantity * newUnitConfig.cost;
    const costDelta = newCost - oldCost;
    sheetStore.updateUnitSpendingsIfNeeded(costDelta);
  }

  updateQuantity(quantity) {
    const wasUpkeepCostUnmodified = this.isUpkeepCostUnmodified();
    const delta = quantity - this.quantity;
    this.quantity = quantity;
    if (wasUpkeepCostUnmodified) {
      this.upkeepCost = this.singularUpkeepCost * this.quantity;
    }
    const unitConfig = getUnitConfig(this.name);
    const cost = unitConfig.cost * delta;
    sheetStore.updateUnitSpendingsIfNeeded(cost);
  }

  @action
  toggleIsEditable() {
    this.isEditable = !this.isEditable;
  }

  @computed
  get unmodifiedUpkeepCost() {
    return this.singularUpkeepCost * this.quantity;
  }

  isUpkeepCostUnmodified() {
    return this.upkeepCost === this.unmodifiedUpkeepCost;
  }
}