import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfo,
  getUsers,
  deleteUser,
  editUser,
} from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    isDrawerVisible: {},
    isVisible: {},
    users: [],
    isLoadingForm: false,
    userInfo: null,
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
    },
    setModalVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    setDrawerVisible: (state, { payload }) => {
      state.isDrawerVisible = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true
      })

      // admin--------------------------------------------------------------------------------------------------------------->
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoadingForm = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoadingForm = false;
        state.isDrawerVisible = { type: "", visible: false };
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoadingForm = false;
        state.isError = true
      })
      .addCase(editUser.pending, (state) => {
        state.isLoadingForm = true;
      })
      .addCase(editUser.fulfilled, (state) => {
        state.isLoadingForm = false;
        state.isDrawerVisible = { type: "", visible: false };
      })
      .addCase(editUser.rejected, (state) => {
        state.isLoadingForm = false;
        state.isError = true
      });
  },
});

export const { reset, setModalVisible, setDrawerVisible } =
  userSlice.actions;
export default userSlice.reducer;
