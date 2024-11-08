import { configureStore } from "@reduxjs/toolkit";
import getUserReducer from "./GetUserData/slice";
import authenticationReducer from "./Authentication/slice"
import placeReducer from "./PlaceService/slice";
import placeDetailReducer from "./PlaceDetails/slice"

const store = configureStore({
  reducer: {
    getUser: getUserReducer,
    authentication: authenticationReducer,
    place: placeReducer,
    placeDetail: placeDetailReducer
    // Add other reducers here if needed
  },
});

export default store;
