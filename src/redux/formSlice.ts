import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { FormType } from "../@types/formType";

export const postForm = createAsyncThunk(
  "form/fetch",
  async (data: FormType) => {
    return await axios
      .post("https://back-zenbittech-nojbrwfoa-mati-pereira.vercel.app/", data)
      .then(() => {
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        } else {
          toast.error(err.message);
        }
      });
  }
);

const formSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postForm.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postForm.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postForm.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default formSlice.reducer;
