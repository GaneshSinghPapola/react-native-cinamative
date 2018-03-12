import { Types } from "../utils";
import axios from "axios";
import { Actions } from "react-native-router-flux";

let instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  const callDispatch = (dispatch, dispatchData) => {
    dispatch(dispatchData);
  }
  
export const listMovies = () => {
    return dispatch => {
      dispatch({ type: Types.MOVIES_DATA });
      instance
        .get(LIST_USERS)
        .then(function(response) {
          console.log("DATA--", response);
          callDispatch(dispatch, { type:Types.MOVIES_DATA, moviesList:response.data });
        })
        .catch(function(error) {
          console.log("ERROR--", error);
          callDispatch(dispatch, { type:Types.MOVIES_DATA, moviesList:null });
        });
    };
  }

