import React from 'react';

const BookMark = ({ bookmark }) => {
    // console.log(bookmark)
    const { author_img, author, price } = bookmark
    return (
        <div className='flex items-center gap-3 border-2 solid rounded-lg'>
            <img className='w-20' src={author_img} alt="" />
            <div>
                <h2>{author}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default BookMark;