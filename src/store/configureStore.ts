import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "modules/Requests/redux/requestsSlice";

export default configureStore({
  reducer: {
    requests: questionReducer,
  },
});
