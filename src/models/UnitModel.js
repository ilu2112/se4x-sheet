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
    this.quantity = quantity;
    this.attack = attack;
    this.defense = defense;
    this.move = move;
    this.experience = experience;
    this.technologies = technologies || [];
    this.hull = hull;
    this.upkeepCost = upkeepCost;

    this.updateField = this.updateField.bind(this);
  }

  @action
  updateField(fieldName, value) {
    this[fieldName] = parseInt(value, 10) || 0;
  }
}