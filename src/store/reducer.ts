import { combineReducers } from "redux"
import {
  IStore,
  ILoaderVisibleAction,
  IFirstEntranceAction,
  IMenuOpenAction,
} from "@custom-types/store"

const loaderVisible = (
  state: IStore["loaderVisible"] = false,
  action: ILoaderVisibleAction
): IStore["loaderVisible"] => {
  switch (action.type) {
    case "loader-visible":
      return action.payload
    default:
      return state
  }
}

const firstEntrance = (
  state: IStore["firstEntrance"] = true,
  action: IFirstEntranceAction
): IStore["firstEntrance"] => {
  switch (action.type) {
    case "first-entrance":
      return action.payload
    default:
      return state
  }
}

const menuOpen = (
  state: IStore["menuOpen"] = false,
  action: IMenuOpenAction
): IStore["menuOpen"] => {
  switch (action.type) {
    case "menu-open":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<IStore>({
  loaderVisible,
  firstEntrance,
  menuOpen,
})

export default rootReducer
