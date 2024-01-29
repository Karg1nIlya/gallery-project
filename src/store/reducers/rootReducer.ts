import { combineReducers } from "redux";
import { galleryReducer } from "./galleryReducer";

export const rootReducer = combineReducers({
    galleryReducer: galleryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
