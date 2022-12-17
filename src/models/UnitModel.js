import { action, observable } from "mobx";

export default class UnitModel {
  @observable id;
  @observable name;
  @observable quantity;
  @observable attack;
  @observable defense;
  @observable move;
  @observable experience;
  @observable technologies = [];
  @observable hull;
  @observable upkeepCost;

  constructor({
    id,
    name,
    quantity,
    attack,
    defense,
    move,
    experience,
    technologies,
    hull,
    upkeepCost,
  }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity || 1;
    this.attack = attack || 0;
    this.defense = defense || 0;
    this.move = move || 1;
    this.experience = experience;
    this.technologies = technologies || [];
    this.hull = hull || 1;
    this.upkeepCost = upkeepCost || this.quantity * this.hull;

    this.updateField = this.updateField.bind(this);
  }

  @action
  updateField(fieldName, value) {
    this[fieldName] = parseInt(value, 10) || 0;
  }
}