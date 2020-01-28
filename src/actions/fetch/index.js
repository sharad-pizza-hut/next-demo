import axios from "axios";
import { FETCH, FETCHREJECT } from "../types"

export const fetchData = () => {
  return function (dispatch) {
    axios.get('http://localhost:3000/api/links')
      .then((response) => {
        dispatch({ type: FETCH, payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: FETCHREJECT, payload: err })
      })
  }
}
