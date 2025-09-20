import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.id - b.id,
});

export type UsersState = ReturnType<typeof usersAdapter.getInitialState>;

export const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    userAdded: usersAdapter.addOne,
    userUpdated: usersAdapter.updateOne,
    userDeleted: usersAdapter.removeOne,
    usersReceived: (state, action: PayloadAction<User[]>) => {
      usersAdapter.setAll(state, action.payload);
    },
  },
});

export const { userAdded, userUpdated, userDeleted, usersReceived } =
  userSlice.actions;

export const usersSelectors = usersAdapter.getSelectors<{ users: UsersState }>(
  (state) => state.users,
);

export default userSlice.reducer;
