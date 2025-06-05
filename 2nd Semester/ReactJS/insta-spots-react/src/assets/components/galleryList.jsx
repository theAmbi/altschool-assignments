// import React from 'react';
// import GalleryItem from './GalleryItem';

// const GalleryList = ({ items, onImageClick, onEdit }) => {
//     return (
//         <div className="py-10 flex flex-wrap justify-between gap-10">
//             {items.map((item) => (
//                 <GalleryItem
//                     key={item.id}
//                     image={item.image}
//                     title={item.title}
//                     onClick={() => onImageClick(item.image)}
//                     onEdit={() => onEdit(item)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default GalleryList;




import React, { useState } from 'react'
import GalleryItem from './galleryItem'
import { initialGalleryItems } from '../../data/gallery'
import { IoMdClose } from "react-icons/io"

const GalleryList = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className='py-10 flex flex-wrap justify-between gap-10'>
                {initialGalleryItems.map((item) => {
                    return <GalleryItem key={item.id} image={item.image} title={item.title} onClick={() => setSelectedImage(item.image)} />
                })}
            </div >


            {selectedImage && (
                <div className='fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 transition ease-in-out duration-300'>
                    <div className='relative max-w-3xl w-full p-4 '>
                        <button onClick={() => setSelectedImage(null)} className='absolute top-4 right-2 text-white text-2xl p-5 bg-black/40 rounded-lg cursor-pointer'><IoMdClose /></button>
                        <img src={selectedImage} alt="Image Preview" className='w-2xl max-h-auto rounded-2xl' />
                    </div>
                </div>
            )
            }
        </>
    )
}

export default GalleryList