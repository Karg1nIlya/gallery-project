import { IPhoto } from "@/models/GalleryModel";
import "./photoViewModal.css";
import { useState } from "react";
import { Spinner } from "@/components/Spinner/Spinner";

interface IPhotoViewModal {
    data: IPhoto,
    changePhoto: (id: number)=>void,
    onClose: ()=>void,
    loading: boolean
}

export function PhotoViewModal({data, changePhoto, onClose, loading}: IPhotoViewModal) {
    const [zoomPhoto, setZoomPhoto] = useState(false)

    return (
        <div className="photo-view-modal">
            <button className="photo-view-modal__close-btn" onClick={onClose}>x</button>
            <div className={`photo-view-modal__img-wrapper${zoomPhoto?'--big':''}`}>
                {loading && 
                    <div className="photo-view-modal__spinner">
                        <Spinner/>  
                    </div>
                }
                <img className={`photo-view-modal__img${zoomPhoto?'--big':''}`} src={data.img} onClick={()=>setZoomPhoto(!zoomPhoto)} alt="photo" />
            </div>
            {!zoomPhoto && 
            <>
                <button className="photo-view-modal__prev-btn" onClick={()=>changePhoto((data.id-1))}>
                    <span className="photo-view-modal__vector-left"></span>
                </button>
                <button className="photo-view-modal__next-btn" onClick={()=>changePhoto((data.id+1))}>
                    <span className="photo-view-modal__vector-right"></span>
                </button>
            </>
            }
        </div>
    )
}
