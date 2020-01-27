import { ACTIVE } from "../types"

export const activeClass = id => {
    return ({
        type: ACTIVE,
        payload: ~~id.id,
    });
}
