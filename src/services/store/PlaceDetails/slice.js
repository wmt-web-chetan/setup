import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaceDetailById } from "./actions";

const initialState = {
  placeDetail: null,
  placeDetailLoading: false,
  placeDetailError: null,
};

const placeDetailSlice = createSlice({
  name: "placeDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaceDetailById.pending, (state) => {
        state.placeDetailLoading = true;
        state.placeDetailError = null;
      })
      .addCase(fetchPlaceDetailById.fulfilled, (state, action) => {
        state.placeDetailLoading = false;
        state.placeDetail = action.payload;
      })
      .addCase(fetchPlaceDetailById.rejected, (state, action) => {
        state.placeDetailLoading = false;
        state.placeDetailError = action.error.message;
      });
  },
});

export default placeDetailSlice.reducer;