import { FETCH } from "../types"

export const fetchData = data => {
  return function (dispatch) {
    dispatch({
      type: FETCH,
      payload: data
    });
  }
}
