import { observable, action } from "mobx";
import { TECH_LEVEL_STATE } from "./enums";
import { sheetStore } from "./store";

export default class TechLevelModel {
  level;
  cost;
  isPlaceholder;
  @observable state;

  constructor({
    level,
    cost,
    isPlaceholder,
    state,
  }) {
    this.level = level;
    this.cost = cost;
    this.isPlaceholder = isPlaceholder;
    this.state = state || TECH_LEVEL_STATE.NOT_OWNED;

    this.toggleState = this.toggleState.bind(this);
  }

  @action
  toggleState() {
    if (!this.isPlaceholder) {
      if (this.state === TECH_LEVEL_STATE.MARKED) {
        this.state = TECH_LEVEL_STATE.NOT_OWNED;
      } else {
        this.state = (this.state + 1) % 3;
      }
      sheetStore.syncTechSpendingsIfNeeded();
    }
  }
}