// Bring in the needed functions from the redux toolkit and redux-persis packages

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// impoer Reducers from the slices
import userReducer from "./slice/userSlice.js";
import cartReducer from "./slice/cartSlice.js";
// import productsReducer from "./slice/productsSlice.js";

//  Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  //   products: productsReducer,
});

// Create configuration for the redux persist
const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};

// instantiate the persisted reducer
const persistedReducer = persistReducer(persistConfiguration, rootReducer);

// Configure redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

// Now you need to wrap the app compnent with a provider
// and Persist Gate
// Go to the main.jsx
