

import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const GalleryItem = ({ image, title, onClick }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked((prev) => !prev);
    }
    return (
        <article className='space-y-3 ' onClick={onClick}>
            <img src={image} alt={title} className='rounded-2xl' />
            <div className="bottom flex items-center justify-between" onClick={toggleLike}>
                <p className='font-medium text-main-darks text-lg'>{title}</p>
                {liked ? <FaHeart size={22} className='text-red-500' /> : <FaRegHeart size={22} color='#21212166' />}
            </div>
        </article>
    )
}

export default GalleryItem