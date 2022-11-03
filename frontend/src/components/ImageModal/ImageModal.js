import React from "react";
import './ImageModal.scss';

const ImageModal = ({setIsOpen, image}) => {

    return (
        <>
            <div className={'darkBG'} onClick={() => setIsOpen(false)}/>
            <div className={'centered'}>
                <img src={image}/>
                <button className={'closeBtn'} onClick={() => setIsOpen(false)}>X</button>
            </div>
        </>
    )
}

export default ImageModal;