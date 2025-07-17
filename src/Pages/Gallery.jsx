import React, {useState} from 'react';
import './Gallery.css';


const galleryData = [
   {
    category: 'Rooms',
    items: [
        {
        id: 1,
        title: 'The Serene Spot',
        image: 'IMG_0820.jpeg',
        price: '',
        },
         {
        id: 2,
        title: 'The Signature Gate',
        image: 'IMG_0879.jpeg',
        price: '',
        },
         {
        id: 3,
        title: 'The Velvet Sitting Area',
        image: 'IMG_0829.jpeg',
        price: '',
        },
        {
            id: 4,
        title: 'Luxe Lounge',
        image: 'IMG_0828.jpeg',
        price: '',
        },
         {
        id: 5,
        title: 'The Heritage Wings',
        image: 'IMG_0830.jpeg',
        price: '',
        },
         {
        id: 6,
        title: 'Tranquil Terrace',
        image: 'IMG_0833.jpeg',
        price: '',
        },
        {
            id: 7,
        title: 'Golden Edge',
        image: 'IMG_0822.jpeg',
        price: '',
        },
         {
        id: 8,
        title: 'Peace',
        image: 'IMG_0821.jpeg',
        price: '',
        },
         {
        id: 9,
        title: 'Prestige Wing',
        image: 'IMG_0831.jpeg',
        price: '',
        },
        {
        id: 10,
        title: 'Favor',
        image: 'IMG_0876 (1).jpeg',
        price: '',
        },
        {
            id: 11,
        title: 'Pearl Deluxe',
        image: 'IMG_0823.jpeg',
        price: '',
        },
         
         {
        id: 12,
        title: 'Elegant Entry',
        image: 'IMG_0878.jpeg',
        price: '',
        },
         {
        id: 13,
        title: 'Golden Threshold',
        image: 'IMG_0877.jpeg',
        price: '',
        },
          ],
   },
];

function Gallery  () {
    return(
        <div className='gallery-container'>
            <h2 className='gallery-heading'>Our Gallery</h2>
            {galleryData.map((section, index) => (
                <div key={index} className='gallery-section'>
                    <h3 className='category-title'>{section.category}</h3>
                    <div className='gallery-grid'>
                        {section.items.map((item) => (
                            <div key={item.id} className='gallery-card'>
                                <img src={`/images/${item.image}`} alt={item.title}/>
                                <h4>{item.title}</h4>
                                <p className='price'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;

