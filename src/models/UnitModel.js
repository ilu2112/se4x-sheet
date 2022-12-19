import { action, observable } from "mobx";
import _ from "lodash";
import UnitTechnologyModel from "./UnitTechnologyModel";
import unitsSettings from "../config/units";

export default class UnitModel {
  @observable id;
  @observable name;
  @observable quantity;
  @observable attack;
  @observable defense;
  @observable move;
  @observable tactic;
  @observable experience;
  @observable technologies = [];
  @observable hull;
  @observable upkeepCost;

  @observable isEditable;

  constructor({
    id,
    name,
    quantity,
    attack,
    defense,
    move,
    tactic,
    experience,
    technologies,
    hull,
    upkeepCost,
    isEditable,
  }) {
    this.id = id;
    this.name = name || "-";
    this.quantity = quantity || 1;
    this.attack = attack || 0;
    this.defense = defense || 0;
    this.move = move || 1;
    this.tactic = tactic || 0;
    this.experience = experience || 0;
    this.hull = hull || 1;
    this.upkeepCost = upkeepCost || this.quantity * this.hull;
    this.isEditable = isEditable || false;

    this.technologies = [];
    for (let technology of technologies) {
      this.technologies.push(
        new UnitTechnologyModel(technology)
      );
    }

    this.updateField = this.updateField.bind(this);
    this.toggleIsEditable = this.toggleIsEditable.bind(this);
  }

  @action
  updateField(fieldName, value) {
    if (fieldName === "name") {
      this.updateName(value);
      return;
    }
    this[fieldName] = parseInt(value, 10) || 0;
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
      this.upkeepCost = unitConfig.upkeepCost * this.quantity;
      this.technologies = unitConfig.availableTechs.map(
        name => new UnitTechnologyModel({ name })
      );
    }
  }

  @action
  toggleIsEditable() {
    this.isEditable = !this.isEditable;
  }
}