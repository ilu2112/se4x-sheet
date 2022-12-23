import { action, observable, computed } from "mobx";
import _ from "lodash";
import UnitTechnologyModel from "./UnitTechnologyModel";
import unitsSettings from "../config/units";

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
    this.quantity = quantity || 1;
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
    if (name === "-") {
      this.name = name;
      this.hull = 0;
      this.upkeepCost = 0;
      this.technologies = [];
      return;
    }
    const oldUnitType = this.name.split("-")[0];
    const newUnitType = name.split("-")[0];
    this.name = name;
    if (oldUnitType !== newUnitType) {
      const unitConfig = _.find(unitsSettings, s => s.type === newUnitType);
      this.hull = unitConfig.hull;
      this.singularUpkeepCost = unitConfig.upkeepCost;
      this.upkeepCost = this.singularUpkeepCost * this.quantity;
      this.canGainExp = unitConfig.canGainExp;
      this.reactThreshold = unitConfig.reactThreshold || 99999;
      this.immovable = unitConfig.immovable;
      this.unupgradable = unitConfig.unupgradable || false;
      this.technologies = unitConfig.availableTechs.map(
        name => new UnitTechnologyModel({ name })
      );
    }
  }

  updateQuantity(quantity) {
    const wasUpkeepCostUnmodified = this.isUpkeepCostUnmodified();
    this.quantity = quantity;
    if (wasUpkeepCostUnmodified) {
      this.upkeepCost = this.singularUpkeepCost * this.quantity;
    }
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