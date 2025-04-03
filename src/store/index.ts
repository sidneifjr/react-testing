import { configureStore } from '@reduxjs/toolkit'
import { headerSlice } from '../components/header/header-slice'

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch