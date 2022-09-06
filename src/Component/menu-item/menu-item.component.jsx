import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = (items) => {
    let history = useHistory();
    console.log(items, "menuItems");
    // debugger;
    return (
        <div className={`${items.size} menu-item`}
            onClick={() => history.push(`${items.match.url}${items.linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${items.imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{items.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);

// { title, imageUrl, size, history, linkUrl, match }

