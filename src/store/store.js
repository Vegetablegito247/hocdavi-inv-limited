import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import msgReducer from './message';
import userReducer from './user';
import testimonialReducer from './testimonial';

const persistConfig = {
    key: "root",
    storage
}

const rootReducers = combineReducers({
    message: msgReducer,
    user: userReducer,
    testimonial: testimonialReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);