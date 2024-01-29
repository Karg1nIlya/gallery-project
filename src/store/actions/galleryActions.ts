import { IGalleryResponse, IPhoto } from "@/models/GalleryModel"
const dataImage = require("../dataImage.json")

export const showLoader = (type: string) => {
    return {
        type
    }
}

export const getPhotos = async (type: string, page: number) => {
    try {
        const res:IGalleryResponse = await new Promise(resolve=>{
            setTimeout(() => {
                resolve(dataImage)
            }, 2000)
        })
        const photosTmp: IPhoto[] = res.photos.photo.map(el=>{
            return {
                id: el.id,
                img: `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`
            }
        })
        return {
            type,
            payload: {
                photos: [...photosTmp, ...photosTmp]
            }
        }
    } catch (error) {
        console.log(error)
    }
}
