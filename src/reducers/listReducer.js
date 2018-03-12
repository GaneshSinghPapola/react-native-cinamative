import { Types } from "../utils";
const INITIAL_STATE = {
  list_data: null,
  isLoading: false,
  error: "",
  data: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
