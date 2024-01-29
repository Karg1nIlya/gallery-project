import { IAction, actionTypes, initialStateGallery } from "../types/galleryType";

export const galleryReducer = (state = initialStateGallery, action: IAction) => {
    switch(action.type) {
        
        case actionTypes.SHOW_LOADER: {
            return {...state, loading: true};
        }

        case actionTypes.GET_PHOTOS: {
            return {...state, photos: [...state.photos, ...action.payload.photos], loading: false};
        }

        default: {
            return state;
        }
    }
}