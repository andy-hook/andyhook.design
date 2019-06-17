import { createAction, createPayloadedAction } from "./action-helpers"
import {
  IFlushTokenAction,
  ILoaderVisibleAction,
  IFirstEntranceAction,
  IMenuOpenAction,
  IPrimaryThemeAction,
  ISecondaryThemeAction,
} from "@custom-types/store"

export const flushTokenAction = createAction<IFlushTokenAction>(
  "auth/flush-token"
)

export const loaderVisibleAction = createPayloadedAction<ILoaderVisibleAction>(
  "loader-visible"
)

export const firstEntranceAction = createPayloadedAction<IFirstEntranceAction>(
  "first-entrance"
)

export const menuOpenAction = createPayloadedAction<IMenuOpenAction>(
  "menu-open"
)

export const setPrimaryThemeAction = createPayloadedAction<IPrimaryThemeAction>(
  "primary-theme"
)

export const setSecondaryThemeAction = createPayloadedAction<
  ISecondaryThemeAction
>("secondary-theme")
