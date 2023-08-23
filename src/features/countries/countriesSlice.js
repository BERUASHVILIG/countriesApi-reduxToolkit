import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: state,
  },
});

export default countriesSlice.reducer;
