import { ON_SIDENAV } from "../actionTypes"

export const onSideNav = (payload: boolean) => {
  return {
    type: ON_SIDENAV,
    payload: payload,
  }
}
