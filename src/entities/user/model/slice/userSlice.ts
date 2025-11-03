import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from '@entities/user/model/types';

const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.id - b.id,
});

export const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    usersReceived: (state, action: PayloadAction<User[]>) => {
      return usersAdapter.setAll(state, action.payload);
    },
  },
});

export const { usersReceived } = userSlice.actions;
export default userSlice.reducer;
