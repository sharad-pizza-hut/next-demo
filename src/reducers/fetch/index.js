import { FETCH, FETCHREJECT } from "../../actions/types"

const initialArray = { fetch: [], error: null }

const reducer = (state = initialArray, action) => {
  switch (action.type) {
    case FETCH:
      return { fetch: action.payload }
    case FETCHREJECT:
      return { error: action.payload }
    default:
      return state
  }
}
export default reducer