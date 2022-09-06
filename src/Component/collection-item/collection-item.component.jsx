import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
    // console.log(item, "new strings");
    return (
        <div className="collection-item">
            <div className='image' style={{
                backgroundImage: `url(${item.imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
        </div>
    )
};

export default CollectionItem;