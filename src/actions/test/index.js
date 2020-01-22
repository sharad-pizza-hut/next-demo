
import * as actionTypes from "../types"

export const serverRenderClock = (isServer) => {
    return { type: actionTypes.TICK, light: !isServer, ts: Date.now() }
}

export const startClock = (light) => {
    return { type: actionTypes.TICK, light, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}
