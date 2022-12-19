import { autorun } from "mobx"
import SheetModel from "./SheetModel";

const getCircularReplacer = () => {
  const keysToSkip = [
    'activeProductionColumn',
    'nextProductionColumn',
  ]
  return (key, value) => {
    if (keysToSkip.indexOf(key) !== -1) {
      return null;
    }
    return value;
  };
};

const initialState = JSON.parse(localStorage.getItem("sheet") || "{}");
const sheetStore = new SheetModel(initialState);

autorun(() => {
  localStorage.setItem("sheet", JSON.stringify(sheetStore, getCircularReplacer()));
});

export {
  sheetStore
};