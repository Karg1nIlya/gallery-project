export interface IGalleryResponse {
    photos: {
        photo: IPhotoResponse[]
    }
}

interface IPhotoResponse {
    id: number,
    farm: string,
    server: string,
    secret: string
}

export interface IPhoto {
    id: number,
    img: string
}