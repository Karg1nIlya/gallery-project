import "./photoList.css";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { actionTypes } from "@/store/types/galleryType";
import { useDispatch } from "react-redux";
import { getPhotos, showLoader } from "@/store/actions/galleryActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { PhotoViewModal } from "../Modal/PhotoViewModal/PhotoViewModal";
import { Modal } from "../Modal/Modal";
import { IPhoto } from "@/models/GalleryModel";

export function PhotoList() {
    const [modalVisible, setModalVisible] = useState(true)
    const state = useTypedSelector(state => state.galleryReducer)
    const [dataImgForModal, setDataImgForModal] = useState<IPhoto|null>()
    const dispatch = useDispatch()
    const [readyToLoad, setReadyToLoad] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        if(state.photos === null) {
            dispatch(showLoader(actionTypes.SHOW_LOADER))
            const res = getPhotos(actionTypes.GET_PHOTOS, 1)
            res.then(e => {
                dispatch(e!);
            })
            .catch((e) => {
                console.log(e)
            })
        }
    },[])

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(()=>{
        if(readyToLoad) {
            dispatch(showLoader(actionTypes.SHOW_LOADER))
            const res = getPhotos(actionTypes.GET_PHOTOS, currentPage)
            res.then(e => {
                dispatch(e!)
                setCurrentPage(prev=>prev+1)
            })
            .catch(() => {
                // dispatch(showAlert(actionTypesAlert.SHOW_ALERT, 'Упс... Что-то пошло не так', true))
            })
            .finally(()=> {
                setReadyToLoad(false) 
            })
        }
    }, [readyToLoad])

    function loadPhoto() {
        dispatch(showLoader(actionTypes.SHOW_LOADER))
        const res = getPhotos(actionTypes.GET_PHOTOS, currentPage)
        res.then(e => {
            dispatch(e!)
            setCurrentPage(prev=>prev+1)
        })
        .catch(() => {
            // dispatch(showAlert(actionTypesAlert.SHOW_ALERT, 'Упс... Что-то пошло не так', true))
        })
        .finally(()=> {
            setReadyToLoad(false) 
        })
    }

    const scrollHandler = () => {
        if(document.documentElement.scrollHeight - (document.documentElement.scrollTop+window.innerHeight)<100) {
            setReadyToLoad(true)
        }
    }

    const changePhoto = (id: number) => {
        if(id>=0) {
            let newData: IPhoto|undefined = state.photos.find((el, i)=>(i)===id)
            if(newData) {
                newData.id = (id)
                setDataImgForModal(newData)
            } else {
                dispatch(showLoader(actionTypes.SHOW_LOADER))
                const res = getPhotos(actionTypes.GET_PHOTOS, currentPage)
                res.then(e => {
                    dispatch(e!)
                    setCurrentPage(prev=>prev+1)
                    const nextPhoto: IPhoto = {
                        id: id,
                        img: e.payload.photos[0].img
                    }
                    setDataImgForModal(nextPhoto)
                })
                .catch(() => {
                    // dispatch(showAlert(actionTypesAlert.SHOW_ALERT, 'Упс... Что-то пошло не так', true))
                })
                .finally(()=> {
                    setReadyToLoad(false) 
                })
                
            }
        }
    }

    const clickPhotoItem = (dataImgForModalTmp: IPhoto) => {
        setDataImgForModal(dataImgForModalTmp)
        setModalVisible(true)
    }

    return (
        <>
        {modalVisible && dataImgForModal &&
            <Modal onClose={()=>setModalVisible(false)}>
                <PhotoViewModal loading={state.loading} data={dataImgForModal} changePhoto={changePhoto} onClose={()=>setModalVisible(false)}/>
            </Modal>
        }
        <div className="photo-list">
            {state.photos.map((el, i)=>{
                return (
                    <div className="photo-item" key={i} onClick={()=>clickPhotoItem({id: i, img: el.img})}>
                        <img className="photo-item__img" src={el.img} alt="photo" />
                    </div>
                )
            })}
        </div>
        {state.loading &&
            <Spinner/>
        }
        </>
    )
}
