import { TICK } from "../types"

export const serverRenderClock = (isServer) => {
    return { type: TICK, light: !isServer, ts: Date.now() }
}

export const startClock = (light) => {
    return { type: TICK, light, ts: Date.now() }
}