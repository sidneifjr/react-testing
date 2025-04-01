import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateTypes = {
  userName: string
}

const initialState: initialStateTypes = {
  userName: 'Sidnei'
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,

  // reducers são as funções que contém a lógica das suas operações.
  // é uma boa prática manter toda a lógica nos mesmos.
  reducers: {
    addUserName: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userName = action.payload
    }
  }
})

export const { addUserName } = headerSlice.actions

// export default headerSlice.reducer