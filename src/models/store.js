import { autorun } from "mobx"
import SheetModel from "./SheetModel";

const initialState = JSON.parse(localStorage.getItem("sheet") || "{}");
const sheetStore = new SheetModel(initialState);

autorun(() => {
  localStorage.setItem("sheet", JSON.stringify(sheetStore));
});

export {
  sheetStore
};