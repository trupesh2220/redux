import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: STATUS.IDEL,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDEL;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDEL));
//     } catch (error) {
//       console.log(error.message);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
