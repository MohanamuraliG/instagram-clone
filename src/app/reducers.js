import { combineReducers } from "redux";
import { userSlice } from "../feature/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});