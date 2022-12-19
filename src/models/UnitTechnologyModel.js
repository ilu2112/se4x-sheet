import { action, observable } from "mobx";

export default class UnitTechnologyModel {
  @observable name;
  @observable owned;

  constructor({
    name,
    owned,
  }) {
    this.name = name;
    this.owned = owned || false;

    this.toggleOwned = this.toggleOwned.bind(this);
  }

  @action
  toggleOwned() {
    this.owned = !this.owned;
  }
}