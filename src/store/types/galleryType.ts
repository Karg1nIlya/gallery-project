import { IPhoto } from "@/models/GalleryModel";

export enum actionTypes {
    SHOW_LOADER = 'SHOW_LOADER',
    GET_PHOTOS = 'GET_PHOTOS'
}

export interface IStateGallery {
    loading: boolean,
    photos: IPhoto[]
}

export interface IAction {
    type: string,
    payload?: any
}

export const initialStateGallery: IStateGallery = {
    photos: [],
    loading: false
}
