import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaceDetailById as fetchPlaceDetailByIdAPI } from "../../Api/placeDetail";


export const fetchPlaceDetailById = createAsyncThunk(
    "placeDetail/fetchById",
    async ({id, placeType}, { rejectWithValue }) => {
      try {
        const response = await fetchPlaceDetailByIdAPI(id, placeType);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );