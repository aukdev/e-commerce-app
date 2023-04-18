import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "category1",
    title: "category title 1",
  },
  {
    id: "category2",
    title: "category title 2",
  },
  {
    id: "category3",
    title: "category title 3",
  },
  {
    id: "category4",
    title: "category title 4",
  },
  {
    id: "category5",
    title: "category title 5",
  },
];

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export const categorySelector = createSelector(
  [(store) => store.category],
  (category) => category
);

export default categorySlice.reducer;
