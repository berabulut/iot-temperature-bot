import { Store } from "pullstate";

export const GlobalStates = new Store({
  loginStatus: false,
  deviceID: "",
});