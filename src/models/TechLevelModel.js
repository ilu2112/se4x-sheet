import { observable, action } from "mobx";
import { ThemeConsumer } from "styled-components";
import { TECH_LEVEL_STATE } from "./enums";

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
      this.state = (this.state + 1) % 3;
    }
  }
}